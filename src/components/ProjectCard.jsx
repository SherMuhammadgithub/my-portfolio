"use client";
import { Play, Star, Lock, ArrowRight } from "lucide-react";

const SIZE_CLASSES = {
  featured: "md:col-span-2 min-h-[340px] md:min-h-[420px]",
  tall: "md:col-span-1 min-h-[340px] md:min-h-[420px]",
  normal: "md:col-span-1 min-h-[300px]",
};

export default function ProjectCard({ project, onOpen }) {
  const Icon = project.icon;
  const thumbnail = project.media?.[0];
  const isVideo = thumbnail?.type === "video";
  const isFeatured = project.size === "featured";

  return (
    <div
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project)}
      className={`group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer transition-all duration-300 hover:border-[#8c56fb]/60 ${SIZE_CLASSES[project.size] || SIZE_CLASSES.normal}`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {thumbnail ? (
          <img
            src={thumbnail.poster || thumbnail.src}
            alt={project.title}
            className="w-full h-full object-cover blur-[2px] scale-105 transition-transform duration-500 group-hover:scale-110"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
      </div>

      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white bg-[#693dc3]/40 border border-[#a78bfa]/40 backdrop-blur-sm">
          <Star className="w-3.5 h-3.5 fill-current" />
          Featured Project
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

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6 space-y-2">
        <h3
          className={`font-bold text-white ${
            isFeatured ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {project.shortTitle}
        </h3>
        <p className="text-sm text-white/70 line-clamp-2">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.slice(0, isFeatured ? 4 : 2).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/10 text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {isFeatured && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen(project);
            }}
            className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #8c56fb 0%, #693dc3 100%)",
            }}
          >
            View Project
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
