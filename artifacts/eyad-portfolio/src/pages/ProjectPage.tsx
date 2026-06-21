import { Link, useParams, Redirect } from "wouter";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TimecodeHUD from "../components/TimecodeHUD";
import { projects, getProject } from "../lib/projects";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug ?? "");

  if (!project) {
    return <Redirect to="/" />;
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Nav />
      <main>
        {/* header */}
        <section className="border-b border-[#1F1F1F]">
          <div className="mx-auto max-w-5xl px-6 pb-10 pt-16 md:pb-14 md:pt-20">
            <Link
              href="/#work"
              className="text-sm font-medium text-[#5A5A5A] transition-colors hover:text-white"
            >
              ← All work
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#1F1F1F] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#5A5A5A]">
                {project.category}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-[#5A5A5A]">
                {project.year}
              </span>
            </div>

            <h1 className="mt-4 max-w-3xl font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#8A8A8A]">
              {project.summary}
            </p>
          </div>

          <div className="mx-auto max-w-5xl px-6 pb-16">
            <div className="frame-strip h-3 w-full" aria-hidden="true" />
            <div className="relative mx-auto aspect-[9/16] w-full max-w-xs overflow-hidden rounded-xl border border-[#1F1F1F] bg-[#0A0A0A] sm:max-w-sm">
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                poster={`/project-${project.slug}.svg`}
              >
                <source src={`/project-${project.slug}.mp4`} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute bottom-3 left-3 rounded bg-black/70 px-2 py-1 text-[10px] font-medium tracking-wide text-[#8A8A8A] backdrop-blur-sm">
                {project.duration}
              </div>
            </div>
            <div className="frame-strip h-3 w-full" aria-hidden="true" />
          </div>
        </section>

        {/* meta + breakdown */}
        <section className="border-b border-[#1F1F1F] py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-[200px_1fr]">
            <div className="space-y-8 text-xs">
              <div>
                <div className="font-semibold uppercase tracking-wide text-[#5A5A5A]">
                  Role
                </div>
                <div className="mt-1.5 text-white">{project.role}</div>
              </div>
              <div>
                <div className="font-semibold uppercase tracking-wide text-[#5A5A5A]">
                  Stack
                </div>
                <div className="mt-1.5 space-y-1">
                  {project.techStack.map((tech) => (
                    <div key={tech} className="text-white">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-semibold uppercase tracking-wide text-[#5A5A5A]">
                  Duration
                </div>
                <div className="mt-1.5 text-white">{project.duration}</div>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-lg font-bold tracking-[-0.04em]">
                  The brief
                </h2>
                <p className="mt-3 leading-relaxed text-[#8A8A8A]">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-lg font-bold tracking-[-0.04em]">
                  The approach
                </h2>
                <p className="mt-3 leading-relaxed text-[#8A8A8A]">
                  {project.approach}
                </p>
              </div>
              <div>
                <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-lg font-bold tracking-[-0.04em]">
                  The result
                </h2>
                <p className="mt-3 leading-relaxed text-[#8A8A8A]">
                  {project.result}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* next project */}
        <section className="border-b border-[#1F1F1F]">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block px-6 py-14 transition-colors hover:bg-[#0A0A0A] md:py-20"
          >
            <div className="mx-auto max-w-5xl">
              <div className="text-sm font-semibold uppercase tracking-wide text-[#5A5A5A]">
                Next project
              </div>
              <div className="mt-3 flex items-center justify-between gap-6">
                <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
                  {nextProject.title}
                </h2>
                <span className="text-2xl text-[#5A5A5A] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
      <TimecodeHUD />
    </>
  );
}
