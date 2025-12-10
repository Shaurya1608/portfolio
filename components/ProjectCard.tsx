import React from "react";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-800/70 bg-gradient-to-b from-slate-900/60 to-slate-950/60 p-5 backdrop-blur-sm transition transform hover:scale-[1.01] hover:border-slate-700">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-600/20 blur-3xl transition-opacity group-hover:opacity-100 opacity-60" />
      <div className="relative z-10">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm text-slate-400">{project.subtitle}</p>
            )}
          </div>
        </div>
        <p className="mb-4 line-clamp-4 text-sm text-slate-300">{project.description}</p>
        {project.tech?.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {project.tech.slice(0, 6).map((t) => (
              <span
                key={t}
                className="rounded-md bg-slate-800/60 px-2 py-1 text-[11px] text-slate-200 border border-slate-700/60"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 6 && (
              <span className="rounded-md bg-slate-800/60 px-2 py-1 text-[11px] text-slate-300 border border-slate-700/60">
                +{project.tech.length - 6} more
              </span>
            )}
          </div>
        )}
        <div className="flex flex-wrap items-center gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500 transition-colors"
            >
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-sm font-medium text-slate-200 hover:border-slate-600 transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
