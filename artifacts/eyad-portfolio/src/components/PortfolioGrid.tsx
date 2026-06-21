import { Link } from "wouter";
import { useRef } from "react";
import SectionIcon from "./SectionIcon";
import { BriefcaseIcon } from "./icons";
import { projects } from "../lib/projects";

export default function PortfolioGrid() {
  return (
    <section id="work" className="border-b border-[#1F1F1F] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <SectionIcon icon={<BriefcaseIcon />} label="Portfolio" />
            <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-3xl font-extrabold tracking-[-0.04em] md:text-4xl inline-block bg-[#005BFF] px-2 py-0.5 text-white">
              Our latest reels.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  slug,
  title,
  category,
  techStack,
  duration,
}: (typeof projects)[number]) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Link
      href={`/work/${slug}`}
      className="group block overflow-hidden rounded-xl border border-[#1F1F1F] bg-[#0A0A0A] transition-colors hover:border-[#5A5A5A]"
      onMouseEnter={() => {
        videoRef.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-[#050505]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          muted
          loop
          playsInline
          preload="none"
          poster={`/project-${slug}.jpg`}
        >
          <source src={`/project-${slug}.mp4`} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute bottom-2 left-2 rounded bg-black/70 px-1.5 py-1 text-[9px] font-medium tracking-wide text-[#8A8A8A] backdrop-blur-sm">
          {duration}
        </div>
        <div className="pointer-events-none absolute right-2 top-2 rounded-full border border-[#1F1F1F] bg-black/70 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#8A8A8A] backdrop-blur-sm">
          {category}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-8">
          <h3 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-sm font-bold tracking-[-0.04em] text-white">
            {title}
          </h3>
          <div className="mt-1 flex flex-wrap gap-1">
            {techStack.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#1F1F1F]/60 bg-black/40 px-1.5 py-0.5 text-[8px] text-[#5A5A5A]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
