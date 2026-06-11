export const config = { runtime: "edge" };

const MODEL = "gemini-2.0-flash";

const responseSchema = {
  type: "object",
  properties: {
    category: {
      type: "string",
      enum: ["음악", "전시", "축제", "문화공간"],
      nullable: true,
    },
    when: {
      type: "string",
      enum: ["today", "weekend"],
      nullable: true,
    },
    free: { type: "boolean", nullable: true },
    location: { type: "string", nullable: true },
    keywords: { type: "array", items: { type: "string" } },
  },
  required: ["category", "when", "free", "location", "keywords"],
  propertyOrdering: ["category", "when", "free", "location", "keywords"],
};

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

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return json({ error: "GEMINI_API_KEY is not configured" }, 500);
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

  const prompt = [
    "당신은 서울 문화행사 검색 질의를 구조화된 필터로 변환하는 파서입니다.",
    "오늘 날짜는 2026-06-11(목)이고, 이번 주말은 2026-06-13~06-14입니다.",
    "",
    "category: 음악 / 전시 / 축제 / 문화공간 중 하나, 해당 없으면 null.",
    "- 콘서트·공연·라이브·페스 → 음악",
    "- 전시·미술관·갤러리 → 전시",
    "- 페스티벌·오픈스튜디오·야외행사 → 축제",
    "- 바·라운지·북카페·상시 운영 공간 → 문화공간",
    'when: "오늘"이면 today, "이번 주말·주말·토요일·일요일"이면 weekend, 그 외 null.',
    "free: 무료·공짜를 원하면 true, 아니면 null.",
    "location: 지역·동네·구 이름(예: 성수, 한남, 종로구). 없으면 null.",
    "keywords: 위 항목으로 못 담은 의미있는 단어(아티스트명, 분위기 등)만 배열로. 없으면 빈 배열.",
    "",
    `검색어: "${query}"`,
  ].join("\n");

  let geminiRes: Response;
  try {
    geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema,
            temperature: 0,
          },
        }),
      },
    );
  } catch {
    return json({ error: "Failed to reach Gemini" }, 502);
  }

  if (!geminiRes.ok) {
    const detail = await geminiRes.text();
    return json({ error: `Gemini error ${geminiRes.status}`, detail }, 502);
  }

  const data = await geminiRes.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (typeof text !== "string") {
    return json({ error: "Empty Gemini response" }, 502);
  }

  try {
    return json(JSON.parse(text), 200);
  } catch {
    return json({ error: "Unparseable Gemini response" }, 502);
  }
}
