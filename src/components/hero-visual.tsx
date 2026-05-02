export function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_0_80px_-20px_rgba(0,194,168,0.25)] backdrop-blur-md lg:max-w-none"
      aria-hidden
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 520 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00C2A8" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="hv-orbit" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#00C2A8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#22C55E" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="hv-glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#00C2A8" stopOpacity="0.12" />
            <stop offset="55%" stopColor="#22C55E" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0B1220" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="520" height="400" fill="url(#hv-glow)" />
        <ellipse
          cx="260"
          cy="200"
          rx="180"
          ry="110"
          stroke="url(#hv-orbit)"
          strokeWidth="1.2"
          transform="rotate(-8 260 200)"
          opacity="0.9"
        />
        <ellipse
          cx="260"
          cy="200"
          rx="130"
          ry="70"
          stroke="url(#hv-orbit)"
          strokeWidth="1"
          transform="rotate(18 260 200)"
          opacity="0.55"
        />
        <rect
          x="72"
          y="88"
          width="88"
          height="52"
          rx="10"
          stroke="rgba(230,237,243,0.12)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.02)"
        />
        <rect
          x="360"
          y="96"
          width="88"
          height="52"
          rx="10"
          stroke="rgba(230,237,243,0.12)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.02)"
        />
        <rect
          x="96"
          y="268"
          width="88"
          height="52"
          rx="10"
          stroke="rgba(230,237,243,0.12)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.02)"
        />
        <rect
          x="336"
          y="260"
          width="88"
          height="52"
          rx="10"
          stroke="rgba(230,237,243,0.12)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.02)"
        />
        <circle cx="116" cy="114" r="4" fill="#4ADE80" opacity="0.85" />
        <circle cx="400" cy="122" r="3.5" fill="#00C2A8" opacity="0.75" />
        <circle cx="130" cy="294" r="3" fill="#22C55E" opacity="0.65" />
        <circle cx="380" cy="286" r="3.5" fill="#4ADE80" opacity="0.55" />
        <path
          d="M160 114C200 120 220 150 240 178"
          stroke="url(#hv-line)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M360 122C320 128 290 150 270 178"
          stroke="url(#hv-line)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M184 294C220 270 240 240 252 214"
          stroke="url(#hv-line)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M360 286C320 262 288 232 268 214"
          stroke="url(#hv-line)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle
          cx="260"
          cy="196"
          r="44"
          stroke="url(#hv-line)"
          strokeWidth="1.2"
          fill="rgba(11,18,32,0.5)"
        />
        <circle cx="260" cy="196" r="6" fill="#22C55E" opacity="0.35" />
        <path
          d="M260 168v56M244 188h32"
          stroke="url(#hv-line)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <rect
          x="208"
          y="312"
          width="104"
          height="36"
          rx="8"
          stroke="rgba(74,222,128,0.35)"
          strokeWidth="1"
          fill="rgba(34,197,94,0.06)"
        />
        <text
          x="260"
          y="334"
          textAnchor="middle"
          fill="#8A94A6"
          fontSize="11"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.08em"
        >
          CAPITAL IMPACT
        </text>
        <text
          x="116"
          y="82"
          textAnchor="middle"
          fill="#8A94A6"
          fontSize="10"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.12em"
        >
          SYSTEMS
        </text>
        <text
          x="404"
          y="90"
          textAnchor="middle"
          fill="#8A94A6"
          fontSize="10"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.12em"
        >
          SIGNAL
        </text>
        <text
          x="140"
          y="340"
          textAnchor="middle"
          fill="#8A94A6"
          fontSize="10"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.12em"
        >
          EXECUTION
        </text>
        <text
          x="380"
          y="332"
          textAnchor="middle"
          fill="#8A94A6"
          fontSize="10"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.12em"
        >
          DECISION
        </text>
      </svg>
    </div>
  );
}
