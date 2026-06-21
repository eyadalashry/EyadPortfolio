export default function BlueNav() {
  return (
    <div className="min-h-screen bg-[#060606] flex flex-col items-center pt-8">
      {/* Blue variant nav */}
      <div
        className="flex items-center gap-1 rounded-full px-2 py-1.5"
        style={{
          background: "rgba(0, 91, 255, 0.18)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(0, 91, 255, 0.40)",
          boxShadow: "0 8px 32px rgba(0,91,255,0.20), inset 0 1px 0 rgba(255,255,255,0.10)",
        }}
      >
        {/* Profile identity */}
        <div className="flex items-center gap-2.5 rounded-full px-1 py-0.5">
          <div
            className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#1a2a4a] flex items-center justify-center text-xs text-white font-bold"
            style={{ border: "1px solid rgba(0, 91, 255, 0.5)" }}
          >
            EA
          </div>
          <div className="leading-tight">
            <p className="text-xs font-semibold tracking-tight text-white whitespace-nowrap">
              Eyad Alashry
            </p>
            <p className="text-[10px] whitespace-nowrap" style={{ color: "rgba(150,190,255,0.70)" }}>
              Reels Video Editor
            </p>
          </div>
        </div>

        {/* Divider */}
        <span className="mx-1 h-5 w-px shrink-0" style={{ background: "rgba(0,91,255,0.35)" }} />

        {/* Nav icons */}
        {[
          {
            label: "Home",
            color: "#7EB8FF",
            path: "M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z",
          },
          {
            label: "Portfolio",
            color: "#A78BFA",
            path: null,
            rect: true,
          },
          {
            label: "FAQ",
            color: "#FB923C",
            path: "M7 4h10a2 2 0 0 1 2 2v14l-4-3-4 3-4-3-4 3V6a2 2 0 0 1 2-2Z M9 9h6M9 13h4",
          },
        ].map((item, i) => (
          <div key={item.label} className="flex items-center">
            {i > 0 && (
              <span className="mx-0.5 h-4 w-px" style={{ background: "rgba(0,91,255,0.25)" }} />
            )}
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ color: item.color, background: `${item.color}15` }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-[18px] w-[18px]">
                {item.rect ? (
                  <>
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18" />
                  </>
                ) : (
                  item.path!.split(" M").map((seg, si) => (
                    <path key={si} d={si === 0 ? seg : `M${seg}`} />
                  ))
                )}
              </svg>
            </div>
          </div>
        ))}

        {/* Divider */}
        <span className="mx-1 h-5 w-px shrink-0" style={{ background: "rgba(0,91,255,0.35)" }} />

        {/* Book a Call CTA */}
        <div
          className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold text-white cursor-pointer"
          style={{
            background: "#005BFF",
            border: "1px solid rgba(100,160,255,0.40)",
            boxShadow: "0 0 16px rgba(0,91,255,0.45)",
          }}
        >
          Book a Call
        </div>
      </div>

      <p className="mt-6 text-xs text-[#4a6aaa]">Blue variant</p>
    </div>
  );
}
