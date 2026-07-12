import { Link } from "react-router";

type Crumb = {
  label: string;
  to?: string;
};

export function BreadcrumbTrail({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-olive dark:text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {item.to && !isLast ? (
                <Link to={item.to} className="transition-colors hover:text-sage">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-charcoal dark:text-chalk" : ""}>{item.label}</span>
              )}
              {!isLast ? <span>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
