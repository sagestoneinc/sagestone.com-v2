"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = {
  href: string;
  event?: string;
  label: string;
  location: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children">;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, payload: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, payload);
}

export function TrackedLink({
  href,
  event = "cta_click",
  label,
  location,
  className,
  children,
  ...props
}: Props) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const onClick = () => {
    trackEvent(event, {
      cta_text: label,
      location,
      target_url: href,
    });
  };

  if (isExternal) {
    return (
      <a href={href} className={className} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}
