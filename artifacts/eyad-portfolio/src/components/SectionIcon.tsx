import { ReactNode } from "react";

type SectionIconProps = {
  icon: ReactNode;
  label: string;
};

export default function SectionIcon({ icon, label }: SectionIconProps) {
  return (
    <div
      className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1F1F1F]/70 bg-[#0A0A0A]/80 text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.04)] backdrop-blur-sm"
      aria-label={label}
      title={label}
    >
      {icon}
    </div>
  );
}
