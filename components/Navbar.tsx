import React from "react";
import { portfolio } from "@/lib/data/portfolio";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-800/60 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="text-sm font-semibold text-white">
          {portfolio.name}
        </a>
        <div className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm text-slate-300 hover:text-white">
            About
          </a>
          <a href="#skills" className="text-sm text-slate-300 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="text-sm text-slate-300 hover:text-white">
            Projects
          </a>
          <a href="#contact" className="text-sm text-slate-300 hover:text-white">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <a
            href="#contact"
            className="rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-500"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
