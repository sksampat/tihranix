type SiteLogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { mark: 32, text: "text-sm tracking-[0.2em]" },
  md: { mark: 40, text: "text-base tracking-[0.22em]" },
  lg: { mark: 48, text: "text-lg tracking-[0.24em]" },
} as const;

export function SiteLogo({
  className = "",
  showWordmark = true,
  size = "md",
}: SiteLogoProps) {
  const s = sizes[size];
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <defs>
          <linearGradient id="tix-orbit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#00C2A8" />
          </linearGradient>
          <filter id="tix-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="url(#tix-orbit)"
          strokeWidth="1.15"
          strokeOpacity="0.35"
          fill="none"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="22"
          ry="12"
          transform="rotate(-24 32 32)"
          stroke="url(#tix-orbit)"
          strokeWidth="1.1"
          strokeOpacity="0.55"
          fill="none"
        />
        <circle cx="50" cy="22" r="2.2" fill="#4ADE80" opacity="0.85" />
        <circle cx="16" cy="40" r="1.8" fill="#00C2A8" opacity="0.75" />
        <circle cx="44" cy="46" r="1.5" fill="#22C55E" opacity="0.6" />
        <path
          d="M32 18v28M24 26h16"
          stroke="url(#tix-orbit)"
          strokeWidth="2.4"
          strokeLinecap="round"
          filter="url(#tix-soft)"
        />
      </svg>
      {showWordmark ? (
        <span
          className={`font-semibold text-brand-soft ${s.text}`}
          style={{ fontFeatureSettings: '"ss01" 1' }}
        >
          TIHRANIX
        </span>
      ) : null}
    </div>
  );
}
