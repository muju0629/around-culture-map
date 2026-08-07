export interface IntroFont {
  family: string;
  css: string;
}

// [0]은 Sora — 이미 사이트 전역에서 로드하는 폰트라 순환의 시드가 된다
export const INTRO_FONTS: IntroFont[] = [
  { family: "Sora", css: '"Sora", sans-serif' },
  { family: "Playfair Display", css: '"Playfair Display", serif' },
  { family: "UnifrakturMaguntia", css: '"UnifrakturMaguntia", serif' },
  { family: "Space Mono", css: '"Space Mono", monospace' },
  { family: "Archivo Black", css: '"Archivo Black", sans-serif' },
];

/**
 * document.fonts.load 결과에서 실제 로드된 폰트만 골라낸다.
 * load()는 모르는 폰트여도 빈 배열로 resolve하므로 length로 판정한다.
 * 전부 비면 Sora로 폴백 — 풀이 빈 채 순환이 도는 일은 없다.
 */
export function loadedFonts(
  fonts: IntroFont[],
  results: PromiseSettledResult<readonly unknown[]>[],
): IntroFont[] {
  const pool = fonts.filter((_, i) => {
    const result = results[i];
    return result?.status === "fulfilled" && result.value.length > 0;
  });
  return pool.length > 0 ? pool : [fonts[0]];
}
