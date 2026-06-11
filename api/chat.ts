import {
  events,
  getCategoryLabel,
  getCurrentWeekend,
  getEvents,
  getTodayInSeoul,
  isActiveDuring,
  isActiveOn,
} from "../src/data/events";
import type {
  CultureEvent,
  EventCategory,
  Locale,
} from "../src/types";

export const config = { runtime: "edge" };

const MODELS = ["llama-3.3-70b-versatile", "llama-3.1-8b-instant"];
const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 800;
const MAX_TOTAL_LENGTH = 5_000;
const RATE_LIMIT = 12;
const RATE_WINDOW_MS = 60_000;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();
const genericEventTokens = new Set([
  "concert",
  "exhibition",
  "festival",
  "live",
  "music",
  "official",
  "performance",
  "seoul",
  "show",
  "ticket",
  "tour",
  "world",
]);

const verifiedEvents = events.filter(
  (event) => Boolean(event.sourceLabel && event.sourceUrl),
);
const verifiedEventsEn = getEvents("en").filter(
  (event) => Boolean(event.sourceLabel && event.sourceUrl),
);
const verifiedEventsEnById = new Map(
  verifiedEventsEn.map((event) => [event.id, event]),
);

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface QueryCriteria {
  category?: EventCategory;
  free: boolean;
  today: boolean;
  weekend: boolean;
  koreaVisit: boolean;
  locationAliases: string[];
  eventIds: string[];
}

function json(
  payload: unknown,
  status: number,
  headers?: Record<string, string>,
): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });
}

function streamLine(payload: unknown) {
  return new TextEncoder().encode(`${JSON.stringify(payload)}\n`);
}

function staticStream(answer: string, eventIds: string[]): Response {
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(streamLine({ type: "meta", eventIds }));
      controller.enqueue(streamLine({ type: "delta", content: answer }));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "application/x-ndjson; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function getClientId(req: Request) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "anonymous"
  );
}

function isRateLimited(req: Request) {
  const now = Date.now();
  const clientId = getClientId(req);
  const current = rateBuckets.get(clientId);

  if (!current || current.resetAt <= now) {
    rateBuckets.set(clientId, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  current.count += 1;
  if (rateBuckets.size > 500) {
    for (const [key, bucket] of rateBuckets) {
      if (bucket.resetAt <= now) {
        rateBuckets.delete(key);
      }
    }
  }
  return current.count > RATE_LIMIT;
}

function placeAliases(event: CultureEvent) {
  const english = verifiedEventsEnById.get(event.id);
  const aliases = [
    event.region,
    `${event.region}동`,
    event.district,
    event.district.replace(/[시군구]$/, ""),
    event.venue,
    english?.region,
    english?.district,
    english?.venue,
  ];
  return aliases
    .filter((alias): alias is string => Boolean(alias))
    .map((alias) => alias.trim().toLowerCase())
    .filter((alias) => alias.length >= 2);
}

function detectCategory(query: string): EventCategory | undefined {
  if (
    /(문화\s?공간|복합문화|라운지|북카페|culture\s?space|cultural\s?space|lounge|book\s?cafe)/.test(
      query,
    )
  ) {
    return "문화공간";
  }
  if (/(축제|페스티벌|오픈\s?스튜디오|festival|open\s?studio)/.test(query)) {
    return "축제";
  }
  if (/(전시|미술관|갤러리|작품|exhibition|museum|gallery|artwork)/.test(query)) {
    return "전시";
  }
  if (
    /(음악|콘서트|공연|라이브|밴드|가수|music|concert|performance|live|band|singer)/.test(
      query,
    )
  ) {
    return "음악";
  }
  return undefined;
}

function detectCriteria(query: string): QueryCriteria {
  const normalized = query.toLowerCase();
  const allAliases = Array.from(
    new Set(verifiedEvents.flatMap((event) => placeAliases(event))),
  ).sort((a, b) => b.length - a.length);
  const locationAliases = allAliases.filter((alias) =>
    normalized.includes(alias),
  );

  const eventIds = verifiedEvents
    .filter((event) => {
      const tokens = [
        event.title,
        event.englishTitle,
        ...event.tags,
      ]
        .flatMap((value) => value.toLowerCase().split(/[\s:/><·—–()[\],]+/))
        .filter(
          (token) =>
            token.length >= 3 && !genericEventTokens.has(token),
        );
      return tokens.some((token) => normalized.includes(token));
    })
    .map((event) => event.id);

  return {
    category: detectCategory(normalized),
    free: /(무료|공짜|돈\s*안\s*드는|free|no\s?cost)/.test(normalized),
    today: /(오늘|금일|today)/.test(normalized),
    weekend:
      /(이번\s*주말|주말|토요일|일요일|this\s?weekend|weekend|saturday|sunday)/.test(
        normalized,
      ),
    koreaVisit:
      /(내한|해외\s*아티스트|international|overseas|visiting\s?artist)/.test(
        normalized,
      ),
    locationAliases,
    eventIds,
  };
}

function selectCandidates(query: string) {
  const criteria = detectCriteria(query);
  const today = getTodayInSeoul();
  const weekend = getCurrentWeekend(today);

  return verifiedEvents
    .filter((event) => event.endDate >= today)
    .filter(
      (event) => !criteria.category || event.category === criteria.category,
    )
    .filter((event) => !criteria.free || event.isFree)
    .filter((event) => {
      if (!criteria.koreaVisit) return true;
      const context = `${event.title} ${event.description} ${event.tags.join(" ")}`;
      return /(내한|한국 관객|한국.*돌아)/.test(context);
    })
    .filter((event) => !criteria.today || isActiveOn(event, today))
    .filter(
      (event) =>
        !criteria.weekend ||
        isActiveDuring(event, weekend.start, weekend.end),
    )
    .filter(
      (event) =>
        criteria.locationAliases.length === 0 ||
        placeAliases(event).some((alias) =>
          criteria.locationAliases.includes(alias),
        ),
    )
    .filter(
      (event) =>
        criteria.eventIds.length === 0 || criteria.eventIds.includes(event.id),
    )
    .sort((a, b) => {
      const aActive = isActiveOn(a, today);
      const bActive = isActiveOn(b, today);
      if (aActive !== bActive) {
        return aActive ? -1 : 1;
      }
      return aActive
        ? a.endDate.localeCompare(b.endDate)
        : a.startDate.localeCompare(b.startDate);
    })
    .slice(0, 3);
}

function noResultsMessage(query: string, locale: Locale) {
  const criteria = detectCriteria(query);
  if (locale === "en") {
    const conditions = [
      criteria.weekend ? "this weekend" : criteria.today ? "today" : "",
      criteria.free ? "free admission" : "",
      criteria.locationAliases[0] ?? "",
      criteria.category
        ? getCategoryLabel(criteria.category, locale).toLowerCase()
        : "",
    ].filter(Boolean);
    const label =
      conditions.length > 0 ? conditions.join(" · ") : "your criteria";

    return `There are no events from verified official sources matching ${label}. Try widening one of the area, date or price conditions.`;
  }

  const conditions = [
    criteria.weekend ? "이번 주말" : criteria.today ? "오늘" : "",
    criteria.free ? "무료" : "",
    criteria.locationAliases[0] ?? "",
    criteria.category ?? "",
  ].filter(Boolean);
  const label = conditions.length > 0 ? conditions.join(" · ") : "요청한 조건";

  return `현재 공식 출처로 확인된 행사 중 ${label}에 맞는 결과가 없어요. 지역, 날짜, 가격 조건 중 하나를 넓혀 다시 물어봐 주세요.`;
}

function buildSystemPrompt(candidates: CultureEvent[], locale: Locale) {
  const today = getTodayInSeoul();
  const weekend = getCurrentWeekend(today);
  const localizedCandidates =
    locale === "en"
      ? candidates.map(
          (event) => verifiedEventsEnById.get(event.id) ?? event,
        )
      : candidates;
  const catalog = localizedCandidates
    .map((event) => {
      const when =
        event.startDate === event.endDate
          ? event.startDate
          : `${event.startDate}~${event.endDate}`;
      return locale === "en"
        ? [
            `ID: ${event.id}`,
            `Title: ${event.title}`,
            `Category: ${getCategoryLabel(event.category, locale)}`,
            `Location: ${event.region} · ${event.district} · ${event.venue}`,
            `Dates: ${when}`,
            `Price: ${event.isFree ? "Free" : event.price}`,
            `Description: ${event.description}`,
          ].join(" | ")
        : [
            `ID: ${event.id}`,
            `제목: ${event.title}`,
            `분류: ${event.category}`,
            `장소: ${event.region}·${event.district} ${event.venue}`,
            `기간: ${when}`,
            `가격: ${event.isFree ? "무료" : event.price}`,
            `설명: ${event.description}`,
          ].join(" | ");
    })
    .join("\n");

  if (locale === "en") {
    return [
      "You are AROUND's Seoul culture curator.",
      "The server has validated the user's criteria and supplied only the verified official event candidates below.",
      "Never add events or facts outside this list.",
      `Today is ${today}. This weekend is ${weekend.start} through ${weekend.end}.`,
      "",
      "Response rules:",
      "1. Recommend no more than three candidates concisely.",
      "2. Include each candidate's official title exactly once.",
      "3. Do not alter or guess categories, prices or dates.",
      "4. Write the entire response in natural English using no more than six sentences.",
      "",
      "[VERIFIED OFFICIAL EVENT CANDIDATES]",
      catalog,
    ].join("\n");
  }

  return [
    "당신은 AROUND의 서울 문화 큐레이터입니다.",
    "서버가 사용자의 조건을 검증해 아래 공식 행사 후보만 전달했습니다.",
    "목록 밖의 행사나 사실은 절대 추가하지 마세요.",
    `오늘은 ${today}, 이번 주말은 ${weekend.start}~${weekend.end}입니다.`,
    "",
    "답변 규칙:",
    "1. 후보를 최대 3개까지 간결하게 추천하세요.",
    "2. 각 후보의 공식 제목을 정확히 한 번씩 포함하세요.",
    "3. 후보의 카테고리, 가격, 날짜를 바꾸거나 추측하지 마세요.",
    "4. 전체 답변은 6문장 이내의 자연스러운 한국어로 작성하세요.",
    "",
    "[검증된 공식 행사 후보]",
    catalog,
  ].join("\n");
}

function streamGroq(
  upstream: ReadableStream<Uint8Array>,
  eventIds: string[],
  locale: Locale,
): Response {
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const reader = upstream.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let wroteContent = false;
      controller.enqueue(streamLine({ type: "meta", eventIds }));

      try {
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const payload = trimmed.slice(5).trim();
            if (payload === "[DONE]") {
              controller.close();
              return;
            }
            try {
              const parsed = JSON.parse(payload);
              const delta = parsed?.choices?.[0]?.delta?.content;
              if (typeof delta === "string" && delta.length > 0) {
                wroteContent = true;
                controller.enqueue(
                  streamLine({ type: "delta", content: delta }),
                );
              }
            } catch {
              // Ignore Groq keep-alive and malformed upstream lines.
            }
          }
        }
      } catch {
        // A partially streamed answer is still useful.
      }

      if (!wroteContent) {
        controller.enqueue(
          streamLine({
            type: "delta",
            content:
              locale === "en"
                ? "I could not complete the recommendation. Please try again shortly."
                : "추천 답변을 완성하지 못했어요. 잠시 후 다시 시도해주세요.",
          }),
        );
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "application/x-ndjson; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return json({ error: "POST only" }, 405);
  }
  if (isRateLimited(req)) {
    return json(
      { error: "Too many requests" },
      429,
      { "retry-after": "60" },
    );
  }

  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) {
    return json({ error: "Request too large" }, 413);
  }

  let history: ChatMessage[] = [];
  let locale: Locale = "ko";
  try {
    const body = await req.json();
    if (!Array.isArray(body?.messages) || body.messages.length > 30) {
      return json({ error: "Invalid messages" }, 400);
    }
    if (body?.locale === "en") {
      locale = "en";
    }

    history = body.messages
      .filter(
        (message: { role?: unknown; content?: unknown }) =>
          (message?.role === "user" || message?.role === "assistant") &&
          typeof message?.content === "string",
      )
      .slice(-MAX_MESSAGES);
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  if (
    history.length === 0 ||
    history.some((message) => message.content.length > MAX_MESSAGE_LENGTH) ||
    history.reduce((sum, message) => sum + message.content.length, 0) >
      MAX_TOTAL_LENGTH
  ) {
    return json({ error: "Invalid message length" }, 400);
  }

  const userMessages = history.filter((message) => message.role === "user");
  const latestUserMessage = userMessages.at(-1)?.content.trim();
  if (!latestUserMessage) {
    return json({ error: "No user message" }, 400);
  }

  const contextual =
    /^(그중|그럼|거기|그 지역|그날|among them|then|there|that area|that day|what about)/i.test(
      latestUserMessage,
    );
  const criteriaQuery =
    contextual && userMessages.length > 1
      ? `${userMessages.at(-2)?.content ?? ""} ${latestUserMessage}`
      : latestUserMessage;
  const candidates = selectCandidates(criteriaQuery);

  if (candidates.length === 0) {
    return staticStream(noResultsMessage(criteriaQuery, locale), []);
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return json({ error: "Chat is not configured" }, 503);
  }

  const payloadMessages = [
    { role: "system", content: buildSystemPrompt(candidates, locale) },
    ...history,
  ];

  for (const model of MODELS) {
    let groqResponse: Response;
    try {
      groqResponse = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model,
            temperature: 0.2,
            stream: true,
            messages: payloadMessages,
          }),
        },
      );
    } catch {
      continue;
    }

    if (groqResponse.ok && groqResponse.body) {
      return streamGroq(
        groqResponse.body,
        candidates.map((event) => event.id),
        locale,
      );
    }

    if (groqResponse.status !== 404 && groqResponse.status !== 400) {
      break;
    }
  }

  return json({ error: "Chat service unavailable" }, 502);
}
