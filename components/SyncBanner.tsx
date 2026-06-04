export default function SyncBanner() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative rounded-3xl border border-cyber-cyan/20 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0f1019 0%, #131520 50%, #0f1019 100%)",
          }}
        >
          {/* Background glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(252,140,16,0.05) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-10 lg:p-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left space-y-5">
              <span className="text-cyber-cyan text-xs font-semibold tracking-widest uppercase">
                Cross-Device Sync
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-manga-white leading-tight">
                Start on phone.
                <br />
                <span className="text-cyber-cyan">Finish on tablet.</span>
              </h2>
              <p className="text-muted text-lg max-w-md mx-auto lg:mx-0">
                Your bookmarks and reading progress sync automatically across
                all your Android devices. Pick up exactly where you left off.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                {["Automatic sync", "Instant resume", "All Android devices"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-2 text-sm text-manga-white/80 border border-white/10 rounded-full px-3 py-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Device illustration */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Phone */}
              <div
                className="rounded-[24px] border border-white/10 overflow-hidden"
                style={{
                  width: 110,
                  height: 220,
                  background: "#0d0e14",
                }}
              >
                <div className="h-2 w-8 rounded-b-full bg-black/60 mx-auto" />
                <div className="flex flex-col gap-[2px] px-1.5 pt-1">
                  {[60, 45, 55, 40].map((h, i) => (
                    <div
                      key={i}
                      className="rounded-sm"
                      style={{
                        height: h,
                        background: `linear-gradient(135deg, #1a1b24 0%, ${
                          i % 2 === 0 ? "#22232f" : "#1e202b"
                        } 100%)`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Sync arrow */}
              <div className="flex flex-col items-center gap-1">
                <div className="text-cyber-cyan">
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                    <path
                      d="M4 12h24M20 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[9px] text-cyber-cyan/60 font-medium tracking-wider uppercase">
                  Sync
                </span>
                <div className="text-cyber-cyan rotate-180">
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                    <path
                      d="M4 12h24M20 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Tablet */}
              <div
                className="rounded-[16px] border border-cyber-cyan/30 overflow-hidden"
                style={{
                  width: 160,
                  height: 220,
                  background: "#0d0e14",
                  boxShadow: "0 0 30px rgba(252,140,16,0.12)",
                }}
              >
                <div className="h-3 border-b border-white/5 flex items-center px-2 gap-1">
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                </div>
                <div className="flex flex-col gap-[2px] px-2 pt-1">
                  {[55, 40, 65, 45].map((h, i) => (
                    <div
                      key={i}
                      className="rounded-sm"
                      style={{
                        height: h,
                        background: `linear-gradient(135deg, #1a1b24 0%, ${
                          i % 2 === 0 ? "#20212d" : "#1c1d28"
                        } 100%)`,
                      }}
                    />
                  ))}
                </div>
                {/* Active reading indicator */}
                <div className="mx-2 mt-1 flex items-center gap-1.5 rounded bg-cyber-cyan/10 px-2 py-1">
                  <span className="w-1 h-1 rounded-full bg-cyber-cyan animate-pulse" />
                  <span className="text-[8px] text-cyber-cyan">Reading now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
