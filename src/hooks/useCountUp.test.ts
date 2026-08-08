import { describe, expect, it } from "vitest";
import { countUpValue } from "./useCountUp";

describe("카운트업 보간", () => {
  it("끝값에 정확히 도달한다", () => {
    expect(countUpValue(3, 17, 1)).toBe(17);
  });
  it("중간값은 정수다", () => {
    const v = countUpValue(0, 10, 0.5);
    expect(Number.isInteger(v)).toBe(true);
    expect(v).toBeGreaterThan(0);
    expect(v).toBeLessThan(10);
  });
  it("역방향도 된다", () => {
    expect(countUpValue(17, 3, 1)).toBe(3);
  });
});
