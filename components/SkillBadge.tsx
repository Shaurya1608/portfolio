import React from "react";

interface SkillBadgeProps {
  label: string;
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-xs text-slate-200 hover:border-slate-500/70 transition-colors">
      {label}
    </span>
  );
}
