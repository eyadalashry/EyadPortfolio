export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-[#1F1F1F]">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1F1F1F] bg-[#0A0A0A] px-3 py-1.5 text-xs font-semibold text-[#8A8A8A]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#005BFF]" />
          3 spots left this month
        </div>

        <h1 className="max-w-4xl font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-4xl font-normal leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
          Reels That Make Creators{" "}
          <span
            style={{ fontFamily: "var(--font-great-vibes, 'Great Vibes', cursive)" }}
            className="text-[#005BFF] text-5xl font-normal tracking-normal sm:text-6xl md:text-7xl"
          >
            Unforgettable
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#8A8A8A]">
          Your story — told in one scroll-stopping reel. Short-form editing
          for Instagram creators who refuse to be skipped.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#book"
            className="rounded-full bg-[#005BFF] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Book a Discovery Call
          </a>
          <a
            href="#work"
            className="text-sm font-medium text-[#8A8A8A] transition-colors hover:text-white"
          >
            See our work ↓
          </a>
        </div>
      </div>

    </section>
  );
}
