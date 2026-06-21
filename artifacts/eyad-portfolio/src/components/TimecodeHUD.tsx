import { useEffect, useState } from "react";

function formatTimecode(progress: number): string {
  const totalFrames = Math.floor(progress * (60 * 24));
  const ff = totalFrames % 24;
  const totalSeconds = Math.floor(totalFrames / 24);
  const ss = totalSeconds % 60;
  const mm = Math.floor(totalSeconds / 60) % 60;
  const hh = 0;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;
}

export default function TimecodeHUD() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full border border-[#1F1F1F] bg-[#0A0A0A]/80 px-3 py-1.5 backdrop-blur-sm sm:flex"
      aria-hidden="true"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#005BFF]" />
      <span className="text-[11px] font-medium tabular-nums tracking-wider text-[#8A8A8A]">
        {formatTimecode(progress)}
      </span>
    </div>
  );
}
