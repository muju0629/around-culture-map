import { describe, expect, it } from "vitest";
import {
  courseTotalMinutes,
  daysUntilEnd,
  dwellMinutes,
  haversineMeters,
  parseCourse,
  reorder,
  serializeCourse,
  walkSeconds,
} from "./course";

describe("URL 직렬화", () => {
  it("왕복하면 같은 배열이다", () => {
    const ids = ["a", "b", "c"];
    const known = new Set(ids);
    expect(parseCourse(serializeCourse(ids), known)).toEqual(ids);
  });

  it("모르는 id는 건너뛴다", () => {
    expect(parseCourse("a,zzz,b", new Set(["a", "b"]))).toEqual(["a", "b"]);
  });

  it("중복은 첫 번째만 남긴다", () => {
    expect(parseCourse("a,b,a", new Set(["a", "b"]))).toEqual(["a", "b"]);
  });

  it("빈 값과 null은 빈 배열이다", () => {
    expect(parseCourse(null, new Set(["a"]))).toEqual([]);
    expect(parseCourse("", new Set(["a"]))).toEqual([]);
  });
});

describe("reorder", () => {
  it("앞에서 뒤로 옮긴다", () => {
    expect(reorder(["a", "b", "c"], 0, 2)).toEqual(["b", "c", "a"]);
  });

  it("뒤에서 앞으로 옮긴다", () => {
    expect(reorder(["a", "b", "c"], 2, 0)).toEqual(["c", "a", "b"]);
  });

  it("제자리로 옮기면 그대로다", () => {
    expect(reorder(["a", "b", "c"], 1, 1)).toEqual(["a", "b", "c"]);
  });

  it("범위 밖 인덱스는 원본을 돌려준다", () => {
    expect(reorder(["a", "b"], 5, 0)).toEqual(["a", "b"]);
    expect(reorder(["a", "b"], 0, 9)).toEqual(["a", "b"]);
  });

  it("원본을 바꾸지 않는다", () => {
    const list = ["a", "b", "c"];
    reorder(list, 0, 2);
    expect(list).toEqual(["a", "b", "c"]);
  });
});

describe("직선거리 대체 계산", () => {
  it("신촌 두 지점이 300m 부근이다", () => {
    const m = haversineMeters(
      { latitude: 37.5573, longitude: 126.9366 },
      { latitude: 37.5559, longitude: 126.9395 },
    );
    expect(m).toBeGreaterThan(200);
    expect(m).toBeLessThan(500);
  });

  it("같은 지점은 0m다", () => {
    const p = { latitude: 37.5, longitude: 127 };
    expect(haversineMeters(p, p)).toBeCloseTo(0, 5);
  });

  it("시속 4km로 환산한다", () => {
    expect(walkSeconds(1000)).toBeCloseTo(900, 0);
  });
});

describe("체류 시간 합산", () => {
  it("장소는 20분, 행사는 60분이다", () => {
    expect(dwellMinutes("place")).toBe(20);
    expect(dwellMinutes("event")).toBe(60);
  });

  it("도보 시간과 체류 시간을 더한다", () => {
    // 장소 3곳(60분) + 구간 6분 · 7분(780초)
    expect(courseTotalMinutes(["place", "place", "place"], [360, 420])).toBe(73);
  });

  it("빈 코스는 0분이다", () => {
    expect(courseTotalMinutes([], [])).toBe(0);
  });
});

describe("종료 임박", () => {
  const today = new Date("2026-08-05T00:00:00Z");

  it("사흘 뒤 끝나면 3을 준다", () => {
    expect(daysUntilEnd("2026-08-08", today)).toBe(3);
  });

  it("상설 장소는 undefined다", () => {
    expect(daysUntilEnd(undefined, today)).toBeUndefined();
  });

  it("이미 끝났으면 음수다", () => {
    expect(daysUntilEnd("2026-08-01", today)).toBe(-4);
  });
});
