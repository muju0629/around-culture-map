import { events } from "../src/data/events";

export const config = { runtime: "edge" };

const MODELS = ["llama-3.3-70b-versatile", "llama-3.1-8b-instant"];

const catalog = events
  .map((event) => {
    const when =
      event.startDate === event.endDate
        ? event.startDate
        : `${event.startDate}~${event.endDate}`;
    const price = event.isFree ? "무료" : event.price;
    return `- "${event.title}" | ${event.category} | ${event.region}·${event.district} ${event.venue} | ${when} | ${price} | ${event.description}`;
  })
  .join("\n");

const SYSTEM_PROMPT = [
  "당신은 'AROUND'의 서울 문화 큐레이터입니다.",
  "아래 [행사 목록]에 있는 행사만 근거로 추천·안내하세요. 목록에 없는 정보는 절대 지어내지 마세요.",
  "",
  "다음 규칙을 반드시 지키세요:",
  "1. 사용자가 카테고리(전시/음악/축제/문화공간)를 말하면 정확히 그 카테고리만 추천하세요. 예: '전시'를 요청하면 문화공간·축제·음악을 섞지 마세요.",
  "2. '무료'를 요청하면 가격이 무료인 행사만 추천하세요.",
  "3. 지역·날짜를 말하면 그 조건에 맞는 행사만 추천하세요.",
  "4. 조건에 맞는 행사가 없으면 솔직히 '조건에 맞는 행사가 없다'고 말한 뒤, 가장 가까운 대안 1개만 조심스럽게 제안하세요.",
  "5. 최대 3개까지만, 각 추천은 2~3문장 이내로 간결하게.",
  "6. 추천하는 행사의 제목은 [행사 목록]에 적힌 그대로(따옴표 없이) 사용하세요. 상세 링크 연결에 필요합니다.",
  "",
  "한국어로 친근하게. 오늘은 2026-06-11(목), 이번 주말은 2026-06-13~06-14입니다.",
  "",
  "[행사 목록]",
  catalog,
].join("\n");

function json(payload: unknown, status: number): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function streamText(upstream: ReadableStream<Uint8Array>): Response {
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const reader = upstream.getReader();
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();
      let buffer = "";
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
                controller.enqueue(encoder.encode(delta));
              }
            } catch {
              // ignore keep-alive / non-JSON lines
            }
          }
        }
      } catch {
        // upstream ended unexpectedly; close gracefully
      }
      controller.close();
    },
  });

  return new Response(stream, {
    status: 200,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return json({ error: "POST only" }, 405);
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return json({ error: "GROQ_API_KEY is not configured" }, 500);
  }

  let history: { role: string; content: string }[] = [];
  try {
    const body = await req.json();
    if (Array.isArray(body?.messages)) {
      history = body.messages
        .filter(
          (message: { role?: unknown; content?: unknown }) =>
            (message?.role === "user" || message?.role === "assistant") &&
            typeof message?.content === "string",
        )
        .slice(-12)
        .map((message: { role: string; content: string }) => ({
          role: message.role,
          content: message.content,
        }));
    }
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }
  if (history.length === 0) {
    return json({ error: "No messages" }, 400);
  }

  const payloadMessages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history,
  ];

  let lastStatus = 0;
  let lastDetail = "Failed to reach Groq";

  for (const model of MODELS) {
    let groqRes: Response;
    try {
      groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          temperature: 0.4,
          stream: true,
          messages: payloadMessages,
        }),
      });
    } catch {
      continue;
    }

    if (groqRes.ok && groqRes.body) {
      return streamText(groqRes.body);
    }

    lastStatus = groqRes.status;
    lastDetail = await groqRes.text();
    if (groqRes.status !== 404 && groqRes.status !== 400) {
      break;
    }
  }

  return json({ error: `Groq error ${lastStatus}`, detail: lastDetail }, 502);
}
