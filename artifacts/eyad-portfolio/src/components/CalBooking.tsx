const calLink = import.meta.env.VITE_CAL_LINK;

export default function CalBooking() {
  if (!calLink) {
    return (
      <div className="flex min-h-[640px] flex-col items-center justify-center gap-3 px-6 text-center">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5A5A5A]">
          Cal.com not connected yet
        </div>
        <p className="text-sm text-[#8A8A8A]">
          Set{" "}
          <code className="text-white">VITE_CAL_LINK=username/event-name</code>{" "}
          in your environment
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={`https://cal.com/${calLink}?embed=true&theme=dark&layout=column_view&hideEventTypeDetails=false&brandColor=%23005BFF`}
      style={{
        width: "100%",
        height: "640px",
        border: "none",
        display: "block",
        borderRadius: "12px",
      }}
      title="Book a call with Eyad Alashry"
      loading="lazy"
    />
  );
}
