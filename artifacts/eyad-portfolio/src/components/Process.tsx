import SectionIcon from "./SectionIcon";
import { ProcessIcon } from "./icons";

const steps = [
  {
    title: "Discovery call",
    body: "We walk through your content, niche, and what success looks like — retention, conversion, or pure reach.",
  },
  {
    title: "Style match",
    body: "We lock in pacing, caption style, and sound design references before a single clip is cut.",
  },
  {
    title: "Edit pass",
    body: "Your raw footage becomes a finished reel — hooks, captions, sound, and pacing all dialed in.",
  },
  {
    title: "Unlimited revisions",
    body: "Feedback gets folded in fast. We keep refining until the reel is exactly right.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-[#1F1F1F] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <SectionIcon icon={<ProcessIcon />} label="How It Works" />
          <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-3xl font-extrabold tracking-[-0.04em] md:text-4xl inline-block bg-[#005BFF] px-2 py-0.5 text-white">
            From raw clips to scroll-stopping reel.
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-0 right-0 top-[14px] hidden h-px bg-[#1F1F1F] md:block"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step) => (
              <div key={step.title} className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="relative z-10 h-2 w-2 rounded-full bg-[#005BFF]" />
                </div>
                <h3 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-base font-bold tracking-[-0.04em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8A8A8A]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
