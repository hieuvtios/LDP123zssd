const sites = [
  "MangaFire",
  "MangaRead",
  "MangaDex",
  "MangaPlus",
  "Webtoon",
  "Manhwa18",
  "MangaKakalot",
  "ReadManga",
  "MangaSee",
  "Bato.to",
];

export default function SitesTicker() {
  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <p className="text-muted text-sm font-medium">
          Works seamlessly with your favorite manga sites
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #0B0C10, transparent)",
          }}
        />
        <div
          aria-hidden
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #0B0C10, transparent)",
          }}
        />

        <div className="flex gap-6 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {/* Doubled for seamless loop */}
          {[...sites, ...sites].map((site, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-surface text-sm text-muted shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-cyber-cyan/40" />
              {site}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
