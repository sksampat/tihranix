import Image from "next/image";

type SiteLogoProps = {
  className?: string;
  /** Set true if `Logo.png` is mark-only and you want the TIHRANIX text beside it. */
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

/** Display height for the raster logo (width follows aspect ratio). */
const heightClass = {
  sm: "h-14",
  md: "h-16 sm:h-[4.5rem]",
  lg: "h-[4.5rem] sm:h-20",
} as const;

const textClass = {
  sm: "text-sm tracking-[0.2em]",
  md: "text-base tracking-[0.22em]",
  lg: "text-lg tracking-[0.24em]",
} as const;

/** Raster logo in `public/Logo.png` (path is case-sensitive on Linux / Vercel). */
const LOGO_PATH = "/Logo.png";

export function SiteLogo({
  className = "",
  showWordmark = false,
  size = "md",
}: SiteLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src={LOGO_PATH}
        alt="Tihranix"
        width={640}
        height={192}
        className={`${heightClass[size]} w-auto max-w-[min(92vw,460px)] shrink-0 object-contain object-left md:max-w-none`}
        priority
      />
      {showWordmark ? (
        <span
          className={`font-semibold text-brand-soft ${textClass[size]}`}
          style={{ fontFeatureSettings: '"ss01" 1' }}
        >
          TIHRANIX
        </span>
      ) : null}
    </div>
  );
}
