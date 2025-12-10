import React from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 sm:px-6 ${className ?? ""}`}>
      {(title || subtitle) && (
        <header className="mb-8 sm:mb-12">
          {subtitle && (
            <p className="text-sm uppercase tracking-widest text-slate-400">{subtitle}</p>
          )}
          {title && (
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
