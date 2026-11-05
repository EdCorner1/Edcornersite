const CAL_EMBED_URL =
  "https://cal.com/edcorner/30min?embed=&theme=light&layout=month_view";

export function CalEmbed() {
  return (
    <div className="cal-embed-wrap">
      <iframe
        id="cal-inline-30min"
        className="cal-inline"
        title="Book a call with Ed Corner"
        src={CAL_EMBED_URL}
        loading="lazy"
      />
      <a
        className="cal-fallback"
        href="https://cal.com/edcorner/30min"
        target="_blank"
        rel="noreferrer"
      >
        Open booking calendar in a new tab ↗
      </a>
    </div>
  );
}
