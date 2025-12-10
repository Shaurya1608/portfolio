import React from "react";
import { portfolio } from "@/lib/data/portfolio";

function Icon({ name }: { name: string }) {
  const common = "h-4 w-4";
  switch (name) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.74 0 0 .85-.28 2.8 1.05a9.35 9.35 0 0 1 5.1 0c1.94-1.33 2.79-1.05 2.79-1.05.55 1.42.2 2.48.11 2.74.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.79-2.2 4.06 0 4.81 2.67 4.81 6.15V24h-4V15.5c0-2.03-.04-4.65-2.83-4.65-2.83 0-3.26 2.21-3.26 4.5V24h-4V8z"
          />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm7.93 9h-3.18a15.72 15.72 0 0 0-1.2-5.04A8.02 8.02 0 0 1 19.93 11ZM12 4c.86 0 2.26 1.92 2.95 5H9.05C9.74 5.92 11.14 4 12 4ZM7.45 5.96A15.72 15.72 0 0 0 6.25 11H3.07a8.02 8.02 0 0 1 4.38-5.04ZM3.07 13h3.18c.2 1.76.7 3.47 1.2 5.04A8.02 8.02 0 0 1 3.07 13ZM12 20c-.86 0-2.26-1.92-2.95-5h5.9c-.69 3.08-2.09 5-2.95 5Zm4.55-1.96c.5-1.57 1-3.28 1.2-5.04h3.18a8.02 8.02 0 0 1-4.38 5.04Z"
          />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  const site = portfolio;
  const links = site.socials ?? [];
  return (
    <footer className="mt-16 w-full border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {links
            .filter((l) => !!l.url)
            .map((l) => {
              const label =
                l.platform === "website"
                  ? "Website"
                  : l.platform === "email"
                  ? "Email"
                  : l.platform.charAt(0).toUpperCase() + l.platform.slice(1);
              const iconName =
                l.platform === "github"
                  ? "github"
                  : l.platform === "linkedin"
                  ? "linkedin"
                  : l.platform === "email"
                  ? "mail"
                  : "globe";
              return (
                <a
                  key={`${l.platform}-${l.url}`}
                  href={l.url}
                  target={l.platform === "email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-800/70 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200 hover:border-slate-700"
                >
                  <Icon name={iconName} />
                  <span>{l.label ?? label}</span>
                </a>
              );
            })}
        </div>
      </div>
    </footer>
  );
}
