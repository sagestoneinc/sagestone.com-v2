import { Link } from "react-router";

/**
 * SageStone "Bedrock Monogram" — an interlocking S mark built from two
 * mirrored crescent strokes. Uses currentColor so it adapts to context.
 */
export function Monogram({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 88 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left crescent (the stone spine) */}
      <path
        d="M40 4C18 4 4 20 4 42c0 16 9 27 26 33-14 4-22 14-22 27h16c0-11 8-18 22-22V57c-14-4-22-11-22-22 0-13 9-21 22-21V4Z"
        fill="currentColor"
      />
      {/* Right S stroke */}
      <path
        d="M48 100c22 0 36-16 36-38 0-16-9-27-26-33 14-4 22-14 22-27H64c0 11-8 18-22 22v23c14 4 22 11 22 22 0 13-9 21-22 21v10Z"
        fill="currentColor"
        opacity="0.72"
      />
    </svg>
  );
}

/** Full primary logo: monogram + Fraunces wordmark. */
export function Logo({
  className = "",
  showTagline = false,
  monogramClassName = "h-9 w-auto text-sage",
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
