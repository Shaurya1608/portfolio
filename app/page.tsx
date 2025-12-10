import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { SkillBadge } from "@/components/SkillBadge";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolio } from "@/lib/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <Navbar />

      {/* Hero */}
      <header id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        </div>

        <Section className="pt-16 sm:pt-24 md:pt-28">
          <div className="relative z-10 grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="mb-2 text-sm uppercase tracking-widest text-indigo-400">
                {portfolio.role}
              </p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                {portfolio.name}
              </h1>
              <p className="mt-4 max-w-2xl text-slate-300">{portfolio.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-500 transition-colors"
                >
                  View Projects
                </a>
                {portfolio.resumeUrl && (
                  <a
                    href={portfolio.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-600 transition-colors"
                  >
                    Download Resume
                  </a>
                )}
                {portfolio.email && (
                  <a
                    href={`mailto:${portfolio.email}`}
                    className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-600 transition-colors"
                  >
                    Contact Me
                  </a>
                )}
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="mt-2 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 backdrop-blur">
                <h3 className="text-sm font-semibold text-white">About me</h3>
                <p className="mt-2 text-sm text-slate-300">{portfolio.about}</p>
                {portfolio.location && (
                  <p className="mt-4 text-xs text-slate-400">
                    Based in {portfolio.location}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Section>
      </header>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="Toolbox" className="mt-12 sm:mt-16">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {portfolio.skills.map((s) => (
            <SkillBadge key={s} label={s} />
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        title="Projects"
        subtitle="Production & Experiments"
        className="mt-16 sm:mt-20"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Get in touch" className="mt-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800/70 bg-slate-900/40 p-6">
            <h3 className="text-white">Let's build something great</h3>
            <p className="mt-2 text-sm text-slate-300">
              I'm open to full-time roles, contract work, and collaborations.
              Reach out and I'll get back to you soon.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {portfolio.email && (
                <a
                  href={`mailto:${portfolio.email}`}
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                >
                  Email me
                </a>
              )}
              {portfolio.socials
                .filter((s) => s.platform === "github" || s.platform === "linkedin")
                .map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-600"
                  >
                    {s.label ??
                      (s.platform === "github"
                        ? "GitHub"
                        : s.platform === "linkedin"
                        ? "LinkedIn"
                        : "Profile")}
                  </a>
                ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-800/70 bg-slate-900/40 p-6">
            <h4 className="text-sm font-semibold text-white">Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {portfolio.socials.map((s) => (
                <li key={s.url}>
                  <a
                    className="text-slate-300 hover:text-white"
                    href={s.url}
                    target={s.platform === "email" ? "_self" : "_blank"}
                    rel="noreferrer"
                  >
                    {s.label ??
                      (s.platform === "website"
                        ? "Website"
                        : s.platform === "email"
                        ? "Email"
                        : s.platform.charAt(0).toUpperCase() + s.platform.slice(1))}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <div className="mt-10" />
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <FooterShim />
    </div>
  );
}

function FooterShim() {
  // Inline import to avoid adding an extra top-level import in this file's type scope.
  const { Footer } = require("@/components/Footer") as typeof import("@/components/Footer");
  return <Footer />;
}
