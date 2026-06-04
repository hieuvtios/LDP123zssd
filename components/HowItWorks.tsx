const steps = [
  {
    number: "01",
    title: "Download the app",
    desc: "Get EZ Manga from Google Play — free, lightweight, and ready in seconds.",
    icon: "📲",
  },
  {
    number: "02",
    title: "Open your manga site",
    desc: "Navigate to any supported site — MangaFire, MangaRead, and more.",
    icon: "🌐",
  },
  {
    number: "03",
    title: "Read, uninterrupted",
    desc: "Smart mode activates instantly. Clean layout, vertical scroll, no ads.",
    icon: "📖",
  },
  {
    number: "04",
    title: "Auto tracking & ad block",
    desc: "App automatically tracks your progress across sites and blocks ads for the cleanest reading experience.",
    icon: "🛡️",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-cyber-cyan text-xs font-semibold tracking-widest uppercase">
            Getting Started
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-manga-white">
            Up and reading{" "}
            <span className="text-shonen-orange">in 4 steps</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(252,140,16,0.3) 20%, rgba(252,140,16,0.3) 80%, transparent)",
            }}
          />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center lg:items-start lg:text-left group">
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl border border-white/10 bg-surface group-hover:border-cyber-cyan/40 transition-colors"
                    style={{
                      boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                    }}
                  >
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 text-[10px] font-bold text-cyber-cyan bg-ink-black border border-cyber-cyan/30 rounded-full w-5 h-5 flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <div className="font-display text-[11px] font-bold tracking-[0.2em] text-cyber-cyan/60 mb-2 uppercase">
                  Step {step.number}
                </div>
                <h3 className="font-display font-bold text-xl text-manga-white mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
