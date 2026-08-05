import { useState } from "react";
import {
  courseTotalMinutes,
  daysUntilEnd,
  serializeCourse,
} from "../lib/course";
import type { Leg } from "../lib/directions";
import type { Spot } from "../types";

interface CourseTrackProps {
  spots: Spot[];
  legs: Leg[];
  onOptimise: () => void;
  onRemove: (id: string) => void;
  busy?: boolean;
}

export function CourseTrack({
  spots,
  legs,
  onOptimise,
  onRemove,
  busy,
}: CourseTrackProps) {
  const [copied, setCopied] = useState(false);
  const total = courseTotalMinutes(
    spots.map((spot) => spot.kind),
    legs.map((leg) => leg.seconds),
  );

  const copyLink = async () => {
    const url = new URL(window.location.href);
    url.pathname = "/course";
    url.search = `?s=${serializeCourse(spots.map((spot) => spot.id))}`;
    await navigator.clipboard.writeText(url.toString());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  if (spots.length === 0) {
    return (
      <aside className="course-track" aria-label="내 코스">
        <div className="course-track__head">
          <span className="meta-latin">My course</span>
        </div>
        <p className="course-track__empty">
          지도에서 장소를 눌러 코스를 짜보세요.
        </p>
      </aside>
    );
  }

  return (
    <aside className="course-track" aria-label="내 코스">
      <div className="course-track__head">
        <span className="meta-latin">My course</span>
        <span className="numeral course-track__total">
          {String(spots.length).padStart(2, "0")} · {total}′
        </span>
      </div>

      <ol className="course-track__list">
        {spots.map((spot, index) => {
          const leg = legs[index];
          return (
            <li key={spot.id}>
              <div className="course-stop">
                <span className="numeral course-stop__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4>{spot.title}</h4>
                  <span className="meta-ko course-stop__sub">
                    {spot.region} · {spot.category}
                  </span>
                  {(() => {
                    const left = daysUntilEnd(spot.endDate, new Date());
                    if (left === undefined || left < 0 || left > 7) return null;
                    return (
                      <span className="course-stop__ending">
                        {left === 0 ? "오늘 종료" : `${left}일 뒤 종료`}
                      </span>
                    );
                  })()}
                </div>
                <button
                  type="button"
                  className="course-stop__remove"
                  onClick={() => onRemove(spot.id)}
                  aria-label={`${spot.title} 코스에서 빼기`}
                >
                  ×
                </button>
              </div>
              {leg && (
                <p className="meta-ko course-leg">
                  {leg.estimated ? "약 " : ""}도보 {Math.round(leg.seconds / 60)}
                  ′ · {Math.round(leg.meters)}m
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <div className="course-track__actions">
        <button
          type="button"
          className="course-btn"
          onClick={onOptimise}
          disabled={busy || spots.length < 3}
        >
          순서 최적화
        </button>
        <button
          type="button"
          className="course-btn is-solid"
          onClick={copyLink}
        >
          {copied ? "복사됨" : "링크 복사"}
        </button>
      </div>
    </aside>
  );
}
