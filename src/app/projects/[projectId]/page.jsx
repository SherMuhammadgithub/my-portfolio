import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Lock } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import SectionWave from "@/components/SectionWave";
import { getTechColor, getTechIcon } from "@/lib/techIcons";
import { PROJECTS } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ projectId: project.id }));
}

function ProjectMedia({ project }) {
  const media = project.media || [];
  const primaryMedia = media[0];

  if (!primaryMedia) {
    const Icon = project.icon;
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#140c1c] text-center">
        {Icon && <Icon className="h-16 w-16 text-[#a78bfa]/50" />}
        <p className="text-sm text-white/50">
          Project media is confidential and available on request.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0710] shadow-2xl shadow-black/30">
        {primaryMedia.type === "video" ? (
          <video
            controls
            preload="metadata"
            poster={primaryMedia.poster}
            className="block aspect-video w-full object-contain"
          >
            <source src={primaryMedia.src} />
          </video>
        ) : (
          <img
            src={primaryMedia.src}
            alt={`${project.title} preview`}
            className="block max-h-[70vh] w-full object-contain"
          />
        )}
      </div>

      {media.length > 1 && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {media.slice(1).map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0710]"
            >
              <img
                src={item.poster || item.src}
                alt={`${project.title} screen ${index + 2}`}
                className="aspect-video w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default function ProjectPage({ params }) {
  const project = PROJECTS.find((item) => item.id === params.projectId);

  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-[#050709] px-3 pb-28 pt-24 text-white md:px-6 md:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-[#693dc3]/20 blur-[140px]" />
        <article className="relative z-10 mx-auto max-w-6xl">
          <Link
            href="/#portfolio"
            className="button-text mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <ProjectMedia project={project} />

          <header className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a78bfa]">
              {project.type}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              {project.tagline}
            </p>
          </header>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 border-y border-white/10 py-6 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <span className="text-white/40">Role</span>
              <p className="mt-1 text-white/85">{project.role}</p>
            </div>
            <div>
              <span className="text-white/40">Project type</span>
              <p className="mt-1 text-white/85">{project.type}</p>
            </div>
            <div>
              <span className="text-white/40">Category</span>
              <p className="mt-1 text-white/85">{project.categories.join(" / ")}</p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-[1fr_280px]">
            <div className="space-y-12">
              <section>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a78bfa]">
                  Overview
                </p>
                <h2 className="mt-3 text-2xl font-bold">The project</h2>
                <p className="mt-4 text-base leading-8 text-white/70">
                  {project.description}
                </p>
              </section>

              {project.highlights?.length > 0 && (
                <section>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a78bfa]">
                    Highlights
                  </p>
                  <h2 className="mt-3 text-2xl font-bold">What I built</h2>
                  <div className="mt-6 space-y-6">
                    {project.highlights.map((highlight) => {
                      const HighlightIcon = highlight.icon;
                      return (
                        <div key={highlight.title} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#693dc3]/20 text-[#a78bfa]">
                            <HighlightIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{highlight.title}</h3>
                            <p className="mt-1 text-sm leading-6 text-white/60">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}
            </div>

            <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h2 className="font-semibold">Technologies</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => {
                  const TechIcon = getTechIcon(tech);
                  return (
                    <span
                      key={tech}
                      title={tech}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]"
                    >
                      <TechIcon
                        className="h-5 w-5"
                        style={{ color: getTechColor(tech) }}
                        aria-label={tech}
                      />
                    </span>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-text inline-flex items-center gap-2 rounded-lg bg-[#693dc3] px-4 py-2 text-sm font-semibold"
                  >
                    Live site <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs text-white/45">
                    <Lock className="h-3.5 w-3.5" /> Confidential project
                  </span>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-text inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold"
                  >
                    Code <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </aside>
          </div>
        </article>
        <SectionWave variant="dark" />
      </main>
      <Footer />
    </>
  );
}
