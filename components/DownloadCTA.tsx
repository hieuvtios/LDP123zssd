import { GooglePlayButton, AppStoreButton } from "./StoreButtons";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-28 px-6 relative overflow-hidden">
      {/* Manga panel grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(252,140,16,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(252,140,16,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 600,
          height: 300,
          background:
            "radial-gradient(ellipse, rgba(252,140,16,0.08) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <span className="text-cyber-cyan text-xs font-semibold tracking-widest uppercase">
            Available Now
          </span>
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-manga-white leading-tight">
            Your next chapter
            <br />
            <span className="text-cyber-cyan">is waiting.</span>
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            Free to download. Premium plans available. No tracking, no compromises.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <GooglePlayButton large />
          <AppStoreButton large />
        </div>

        <p className="text-muted/50 text-xs">
          Android 7.0+ required · Rated Mature 17+ · 38.3 MB
        </p>
      </div>
    </section>
  );
}
