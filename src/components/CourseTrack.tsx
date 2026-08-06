import { useState } from "react";
import { useLanguage } from "../i18n/language";
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
  const { locale, copy } = useLanguage();
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
      <aside className="course-track" aria-label={copy.course.trackLabel}>
        <div className="course-track__head">
          <span className="meta-latin">{copy.course.trackTitle}</span>
        </div>
        <p className="course-track__empty">{copy.course.empty}</p>
        {/*
          비어 있을 때 안내 한 줄만 두면 데스크톱에서 270px 칼럼이 통째로
          백지가 되어 렌더링이 실패한 것처럼 읽힌다. 번호 슬롯을 흐리게 세워
          이 자리가 무엇을 담는 곳인지 형태로 보여준다.
        */}
        <ol className="course-track__ghosts" aria-hidden="true">
          {[1, 2, 3].map((n) => (
            <li key={n}>
              <span className="numeral">{String(n).padStart(2, "0")}</span>
            </li>
          ))}
        </ol>
      </aside>
    );
  }

  return (
    <aside className="course-track" aria-label={copy.course.trackLabel}>
      <div className="course-track__head">
        <span className="meta-latin">{copy.course.trackTitle}</span>
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
                    if (spot.kind !== "event") return null;
                    const left = daysUntilEnd(spot.endDate, new Date());
                    if (left === undefined || left < 0 || left > 7) return null;
                    return (
                      <span className="course-stop__ending">
                        {left === 0
                          ? copy.course.endsToday
                          : `${left}${copy.course.endsInDays}`}
                      </span>
                    );
                  })()}
                </div>
                <button
                  type="button"
                  className="course-stop__remove"
                  onClick={() => onRemove(spot.id)}
                  aria-label={`${spot.title} ${copy.course.removeSuffix}`}
                >
                  ×
                </button>
              </div>
              {leg && (
                <p
                  className={`${
                    locale === "ko" ? "meta-ko" : "meta-latin"
                  } course-leg`}
                >
                  {leg.estimated ? copy.course.about : ""}
                  {copy.course.walk} {Math.round(leg.seconds / 60)}
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
          {copy.course.optimise}
        </button>
        <button
          type="button"
          className="course-btn is-solid"
          onClick={copyLink}
        >
          {copied ? copy.course.copied : copy.course.copyLink}
        </button>
      </div>
    </aside>
  );
}
