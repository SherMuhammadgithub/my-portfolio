"use client";
import { useRouter } from "next/navigation";
import { Play, Lock, ArrowRight } from "lucide-react";
import { getTechColor, getTechIcon } from "@/lib/techIcons";

const SIZE_CLASSES = {
  featured: "min-h-[360px]",
  tall: "min-h-[360px]",
  normal: "min-h-[360px]",
};

export default function ProjectCard({ project }) {
  const router = useRouter();
  const Icon = project.icon;
  const thumbnail = project.media?.[0];
  const isVideo = thumbnail?.type === "video";
  const isFeatured = project.size === "featured";

  return (
    <div
      onClick={() => router.push(`/projects/${project.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && router.push(`/projects/${project.id}`)}
      className={`group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0b0710] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[#8c56fb]/60 hover:shadow-xl hover:shadow-[#693dc3]/15 ${SIZE_CLASSES[project.size] || SIZE_CLASSES.normal}`}
    >
      {/* Project image */}
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-[#140c1c]">
        {thumbnail ? (
          <img
            src={thumbnail.poster || thumbnail.src}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, #2a1554 0%, #0b0710 100%)",
            }}
          >
            {Icon && (
              <Icon
                className={`text-[#a78bfa]/20 ${
                  isFeatured || project.size === "tall" ? "w-28 h-28" : "w-20 h-20"
                }`}
              />
            )}
          </div>
        )}

        {/* Play button for video thumbnails */}
        {isVideo && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#8c56fb] flex items-center justify-center shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-110">
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
          </div>
        )}

        {/* Confidential lock badge (no public link) */}
        {!project.link && !isFeatured && (
          <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center">
            <Lock className="w-3.5 h-3.5 text-white/70" />
          </div>
        )}
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col p-5 md:p-6 space-y-2">
        <h3
          className={`font-bold text-white ${
            isFeatured ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {project.shortTitle}
        </h3>
        <p className="normal-case text-sm text-white/70 line-clamp-2">
          {project.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-1" aria-label="Technologies used">
          {project.stack.slice(0, isFeatured ? 4 : 2).map((tech) => (
            <span
              key={tech}
              title={tech}
              aria-label={tech}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white/80 transition-colors group-hover:border-[#8c56fb]/40 group-hover:text-[#c4b5fd]"
            >
              {(() => {
                const TechIcon = getTechIcon(tech);
                return (
                  <TechIcon
                    className="h-4 w-4"
                    style={{ color: getTechColor(tech) }}
                    aria-hidden="true"
                  />
                );
              })()}
            </span>
          ))}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/projects/${project.id}`);
          }}
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          style={{
            background: "linear-gradient(135deg, #8c56fb 0%, #693dc3 100%)",
          }}
        >
          View Project
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
