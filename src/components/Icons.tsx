interface IconProps {
  size?: number;
}

export function ArrowIcon({ size = 16 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" />
    </svg>
  );
}

export function BookmarkIcon({
  size = 18,
  filled = false,
}: IconProps & { filled?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill={filled ? "currentColor" : "none"}
    >
      <path
        d="M4.5 2.5h9v13l-4.5-3-4.5 3v-13Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShareIcon({ size = 18 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
    >
      <circle cx="13.5" cy="4" r="2" stroke="currentColor" />
      <circle cx="4.5" cy="9" r="2" stroke="currentColor" />
      <circle cx="13.5" cy="14" r="2" stroke="currentColor" />
      <path d="m6.3 8.1 5.4-3M6.3 9.9l5.4 3" stroke="currentColor" />
    </svg>
  );
}

export function CrosshairIcon({ size = 18 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
    >
      <circle cx="9" cy="9" r="5" stroke="currentColor" />
      <circle cx="9" cy="9" r="1.5" fill="currentColor" />
      <path d="M9 1v3M9 14v3M1 9h3M14 9h3" stroke="currentColor" />
    </svg>
  );
}

export function MinusIcon({ size = 16 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M3 8h10" stroke="currentColor" />
    </svg>
  );
}

export function PlusIcon({ size = 16 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M3 8h10M8 3v10" stroke="currentColor" />
    </svg>
  );
}
