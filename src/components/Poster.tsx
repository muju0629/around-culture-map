import type { CultureEvent } from "../types";
import { useLanguage } from "../i18n/language";

interface PosterProps {
  event: CultureEvent;
  className?: string;
  showLabel?: boolean;
}

export function Poster({
  event,
  className = "",
  showLabel = true,
}: PosterProps) {
  const { copy } = useLanguage();

  if (event.posterImage) {
    return (
      <div className={`poster poster--official ${className}`.trim()}>
        <img
          className="poster__image"
          src={event.posterImage}
          alt={`${event.title} ${copy.event.officialPoster}`}
        />
        {showLabel && (
          <>
            <span className="poster__credit">{event.posterCredit}</span>
            <div className="poster__label">
              <span>{event.englishTitle}</span>
              <span>
                {event.locationLabel ?? `${event.region.toUpperCase()} / SEOUL`}
              </span>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className={`poster poster--${event.poster} ${className}`.trim()}
      aria-label={`${event.title} ${copy.event.poster}`}
      role="img"
    >
      <svg viewBox="0 0 600 760" preserveAspectRatio="none" aria-hidden="true">
        <rect width="600" height="760" className="poster__ground" />
        {event.poster === "orbit" && (
          <>
            <circle cx="300" cy="364" r="212" className="fill-dark" />
            <circle cx="300" cy="364" r="142" className="fill-light" />
            <circle cx="300" cy="364" r="54" className="fill-dark" />
            <path d="M0 364h600" className="stroke-light" />
            <path d="M300 0v760" className="stroke-light" />
          </>
        )}
        {event.poster === "split" && (
          <>
            <path d="M0 0h330L190 760H0Z" className="fill-dark" />
            <path d="m330 0-140 760h170L500 0Z" className="fill-mid" />
            <circle cx="448" cy="560" r="74" className="fill-dark" />
          </>
        )}
        {event.poster === "grid" && (
          <>
            {[0, 1, 2, 3, 4, 5].map((column) => (
              <path
                key={`c-${column}`}
                d={`M${column * 120} 0v760`}
                className="stroke-dark"
              />
            ))}
            {[0, 1, 2, 3, 4, 5, 6].map((row) => (
              <path
                key={`r-${row}`}
                d={`M0 ${row * 126.7}h600`}
                className="stroke-dark"
              />
            ))}
            <rect x="120" y="126.7" width="240" height="253.4" className="fill-dark" />
            <rect x="360" y="506.8" width="120" height="126.7" className="fill-mid" />
          </>
        )}
        {event.poster === "type" && (
          <>
            <text x="30" y="240" className="svg-type svg-type--large">
              CITY
            </text>
            <text x="30" y="420" className="svg-type svg-type--large svg-type--outline">
              BODY
            </text>
            <text x="34" y="580" className="svg-type svg-type--small">
              MOVEMENT / 0614 / SEOUL
            </text>
          </>
        )}
        {event.poster === "wave" && (
          <>
            {[0, 1, 2, 3, 4, 5, 6].map((line) => (
              <path
                key={line}
                d={`M-30 ${180 + line * 58} C120 ${60 + line * 58}, 210 ${
                  300 + line * 42
                }, 330 ${180 + line * 58} S510 ${300 + line * 24}, 650 ${
                  160 + line * 58
                }`}
                className={line % 2 ? "stroke-mid" : "stroke-dark"}
              />
            ))}
          </>
        )}
        {event.poster === "frame" && (
          <>
            <rect x="76" y="86" width="448" height="588" className="stroke-dark stroke-wide" />
            <rect x="142" y="154" width="316" height="452" className="stroke-dark" />
            <rect x="214" y="226" width="172" height="308" className="fill-dark" />
          </>
        )}
        {event.poster === "signal" && (
          <>
            {[0, 1, 2, 3, 4].map((ring) => (
              <circle
                key={ring}
                cx="300"
                cy="380"
                r={52 + ring * 57}
                className={ring === 4 ? "fill-dark" : "stroke-dark"}
              />
            ))}
            <circle cx="300" cy="380" r="170" className="fill-light" />
            <circle cx="300" cy="380" r="52" className="fill-dark" />
          </>
        )}
        {event.poster === "fold" && (
          <>
            <path d="M0 0h300v760H0Z" className="fill-mid" />
            <path d="M300 0h300v760H300Z" className="fill-light" />
            <path d="m80 80 220 170-220 170Z" className="fill-dark" />
            <path d="m520 340-220 170 220 170Z" className="fill-dark" />
            <path d="M300 0v760" className="stroke-dark" />
          </>
        )}
        {event.poster === "column" && (
          <>
            <rect x="80" y="0" width="92" height="760" className="fill-dark" />
            <rect x="254" y="0" width="92" height="760" className="fill-mid" />
            <rect x="428" y="0" width="92" height="760" className="fill-dark" />
            <circle cx="300" cy="380" r="138" className="fill-light" />
            <circle cx="300" cy="380" r="70" className="stroke-dark stroke-wide" />
          </>
        )}
        {event.poster === "void" && (
          <>
            <rect width="600" height="760" className="fill-dark" />
            <ellipse cx="300" cy="360" rx="188" ry="248" className="fill-black" />
            <path d="M70 650h460" className="stroke-light" />
            <path d="M70 676h340" className="stroke-mid" />
          </>
        )}
        {event.poster === "environment" && (
          <>
            <path
              d="M-40 170C80 40 195 260 300 132S515 38 650 180v470H-40Z"
              className="fill-dark"
            />
            <path
              d="M-20 262C110 120 206 350 320 212s207-52 310 68v310H-20Z"
              className="fill-light"
            />
            <path
              d="M-30 390C96 245 224 474 328 328s208-70 302 56v210H-30Z"
              className="fill-mid"
            />
            <circle cx="118" cy="562" r="42" className="fill-dark" />
            <circle cx="476" cy="514" r="62" className="fill-dark" />
          </>
        )}
        {event.poster === "spots" && (
          <>
            {[0, 1, 2, 3, 4].map((column) =>
              [0, 1, 2, 3, 4, 5].map((row) => (
                <circle
                  key={`${column}-${row}`}
                  cx={82 + column * 109}
                  cy={82 + row * 119}
                  r={25 + ((column + row) % 3) * 6}
                  className={
                    (column + row) % 4 === 0 ? "fill-mid" : "fill-dark"
                  }
                />
              )),
            )}
            <rect x="238" y="280" width="124" height="200" className="fill-light" />
          </>
        )}
        {event.poster === "eclipse" && (
          <>
            <rect width="600" height="760" className="fill-black" />
            <circle cx="300" cy="326" r="225" className="fill-mid" />
            <circle cx="365" cy="280" r="220" className="fill-black" />
            <path d="M70 620h460" className="stroke-light stroke-wide" />
            <path d="M70 648h280" className="stroke-mid" />
            <path d="M70 676h390" className="stroke-mid" />
          </>
        )}
        {event.poster === "synthesis" && (
          <>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((line) => (
              <path
                key={line}
                d={`M${70 + line * 44} 80C${190 - line * 8} 230 ${
                  120 + line * 55
                } 500 ${78 + line * 52} 690`}
                className={line % 2 ? "stroke-mid" : "stroke-dark"}
              />
            ))}
            <circle cx="300" cy="378" r="142" className="stroke-dark stroke-wide" />
            <circle cx="300" cy="378" r="72" className="fill-dark" />
            <path d="M0 378h600" className="stroke-dark" />
          </>
        )}
      </svg>
      {showLabel && (
        <div className="poster__label">
          <span>{event.englishTitle}</span>
          <span>
            {event.locationLabel ?? `${event.region.toUpperCase()} / SEOUL`}
          </span>
        </div>
      )}
    </div>
  );
}
