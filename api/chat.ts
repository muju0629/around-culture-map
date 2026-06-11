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
  "아래 [행사 목록]에 있는 행사만 근거로 추천·안내하세요. 목록에 없는 정보는 지어내지 말고, 모르면 모른다고 답하세요.",
  "사용자의 상황(지역·날짜·무료 여부·동행 등)을 고려해 1~3개를 추천하고 이유를 한두 문장으로 설명하세요.",
  "추천할 때는 행사의 정확한 제목을 따옴표 없이 그대로 사용하세요(상세 링크 연결에 필요합니다).",
  "한국어로 친근하고 간결하게 답하세요. 오늘은 2026-06-11(목), 이번 주말은 2026-06-13~06-14입니다.",
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
          temperature: 0.5,
          messages: payloadMessages,
        }),
      });
    } catch {
      continue;
    }

    if (groqRes.ok) {
      const data = await groqRes.json();
      const reply = data?.choices?.[0]?.message?.content;
      if (typeof reply !== "string") {
        return json({ error: "Empty Groq response", model }, 502);
      }
      return json({ reply }, 200);
    }

    lastStatus = groqRes.status;
    lastDetail = await groqRes.text();
    if (groqRes.status !== 404 && groqRes.status !== 400) {
      break;
    }
  }

  return json({ error: `Groq error ${lastStatus}`, detail: lastDetail }, 502);
}
