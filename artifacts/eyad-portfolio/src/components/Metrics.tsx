const metrics = [
  { value: "Eyad Alashry", label: "Name" },
  { value: "Reels Editor", label: "Style" },
  { value: "Instagram", label: "Platform" },
];

export default function Metrics() {
  return (
    <section className="border-b border-[#1F1F1F]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-[#1F1F1F] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {metrics.map((metric) => (
          <div key={metric.label} className="px-6 py-10 text-center md:py-12">
            <div className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-2xl font-extrabold tracking-[-0.04em] md:text-3xl">
              {metric.value}
            </div>
            <div className="mt-1 text-sm text-[#8A8A8A]">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
