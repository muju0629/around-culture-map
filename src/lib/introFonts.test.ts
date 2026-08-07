import { describe, expect, it } from "vitest";
import { INTRO_FONTS, loadedFonts } from "./introFonts";

describe("인트로 폰트 풀", () => {
  it("로드가 확인된 폰트만 풀에 들어간다", () => {
    // document.fonts.load는 모르는 폰트면 빈 배열로 resolve한다 — reject가 아니라
    const results: PromiseSettledResult<readonly unknown[]>[] = [
      { status: "fulfilled", value: [{}] }, // Sora — 로드됨
      { status: "fulfilled", value: [] }, // Playfair — 미로드
      { status: "rejected", reason: new Error("network") }, // Unifraktur
      { status: "fulfilled", value: [{}] }, // Space Mono — 로드됨
      { status: "fulfilled", value: [{}] }, // Archivo — 로드됨
    ];
    const pool = loadedFonts(INTRO_FONTS, results);
    expect(pool.map((f) => f.family)).toEqual([
      "Sora",
      "Space Mono",
      "Archivo Black",
    ]);
  });

  it("전부 실패하면 Sora 하나로 버틴다", () => {
    const results: PromiseSettledResult<readonly unknown[]>[] =
      INTRO_FONTS.map(() => ({ status: "fulfilled", value: [] }));
    expect(loadedFonts(INTRO_FONTS, results)).toEqual([INTRO_FONTS[0]]);
  });
});
