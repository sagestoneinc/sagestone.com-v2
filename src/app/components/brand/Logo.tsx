import { Link } from "react-router";

/**
 * SageStone approved Bedrock Monogram loaded from the brand asset.
 * Uses currentColor so it adapts to header, footer, and dark mode contexts.
 */
export function Monogram({ className = "h-10 w-[1.55rem]" }: { className?: string }) {
  return (
    <span
      className={`inline-block shrink-0 ${className}`}
      style={{
        aspectRatio: "880 / 1432",
        backgroundColor: "currentColor",
        WebkitMask: 'url("/sagestone-monogram.svg") center / contain no-repeat',
        mask: 'url("/sagestone-monogram.svg") center / contain no-repeat',
      }}
      aria-hidden="true"
    />
  );
}

/** Full primary logo: monogram + Fraunces wordmark. */
export function Logo({
  className = "",
  showTagline = false,
  monogramClassName = "h-9 w-[1.4rem] text-sage",
}: {
  className?: string;
  showTagline?: boolean;
  monogramClassName?: string;
}) {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 ${className}`} aria-label="SageStone home">
      <Monogram className={monogramClassName} />
      <span className="flex flex-col leading-none">
        <span
          className="text-[1.6rem] tracking-tight text-charcoal dark:text-chalk"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
        >
          Sage<span className="text-sage">Stone</span>
        </span>
        {showTagline && (
          <span className="mt-1 text-[0.6rem] uppercase tracking-[0.28em] text-slate-olive dark:text-muted-foreground">
            Supporting Ambition
          </span>
        )}
      </span>
    </Link>
  );
}
