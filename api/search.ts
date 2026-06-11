export const config = { runtime: "edge" };

const MODELS = ["llama-3.3-70b-versatile", "llama-3.1-8b-instant"];

const SYSTEM_PROMPT = [
  "당신은 서울 문화행사 검색 질의를 구조화된 JSON 필터로 변환하는 파서입니다.",
  "오늘은 2026-06-11(목)이고 이번 주말은 2026-06-13~06-14입니다.",
  "",
  "다음 키를 가진 JSON 객체 하나만 출력하세요(다른 설명 금지):",
  '- category: "음악" | "전시" | "축제" | "문화공간" | null',
  "    콘서트·공연·라이브 → 음악 / 전시·미술관·갤러리 → 전시 / 페스티벌·오픈스튜디오·야외행사 → 축제 / 바·라운지·북카페·상시 운영 공간 → 문화공간",
  '- when: "today" | "weekend" | null   ("오늘"→today, "주말·이번 주말·토요일·일요일"→weekend, 그 외 null)',
  "- free: true | null   (무료·공짜를 원하면 true, 아니면 null)",
  '- location: 문자열 | null   (지역·동네·구 이름, 예: "성수")',
  "- keywords: 문자열 배열   (위 항목으로 못 담은 의미있는 단어; 없으면 [])",
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

  let query = "";
  try {
    const body = await req.json();
    query = typeof body?.query === "string" ? body.query.trim() : "";
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }
  if (!query) {
    return json({ error: "Empty query" }, 400);
  }

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
          temperature: 0,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: query },
          ],
        }),
      });
    } catch {
      continue;
    }

    if (groqRes.ok) {
      const data = await groqRes.json();
      const content = data?.choices?.[0]?.message?.content;
      if (typeof content !== "string") {
        return json({ error: "Empty Groq response", model }, 502);
      }
      let parsed;
      try {
        parsed = JSON.parse(content);
      } catch {
        return json({ error: "Unparseable Groq response", model }, 502);
      }
      return json(
        {
          category: parsed?.category ?? null,
          when: parsed?.when ?? null,
          free: parsed?.free ?? null,
          location: parsed?.location ?? null,
          keywords: Array.isArray(parsed?.keywords) ? parsed.keywords : [],
        },
        200,
      );
    }

    lastStatus = groqRes.status;
    lastDetail = await groqRes.text();
    // Model retired / not found: try the next. Otherwise stop.
    if (groqRes.status !== 404 && groqRes.status !== 400) {
      break;
    }
  }

  return json({ error: `Groq error ${lastStatus}`, detail: lastDetail }, 502);
}
