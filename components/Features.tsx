const features = [
  {
    icon: "⚡",
    title: "Smart Reader Mode",
    desc: "Auto-detects manga layouts and reformats chapters for clean, distraction-free reading.",
    accent: "cyan",
  },
  {
    icon: "🚫",
    title: "Ad-Free Reading",
    desc: "Strips web clutter so only the story remains. No pop-ups, no banners, just panels.",
    accent: "orange",
  },
  {
    icon: "📜",
    title: "Vertical Scroll",
    desc: "Converts paginated chapters into one smooth, continuous reading experience.",
    accent: "cyan",
  },
  {
    icon: "🌙",
    title: "Dark Mode + Eye Care",
    desc: "Built-in brightness control and dark theme for comfortable night reading marathons.",
    accent: "orange",
  },
  {
    icon: "🔖",
    title: "Auto Bookmarks",
    desc: "Never lose your place. Progress is saved automatically across all your chapters.",
    accent: "cyan",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    desc: "Zero tracking, zero data selling. Your reading history belongs to you alone.",
    accent: "orange",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-cyber-cyan text-xs font-semibold tracking-widest uppercase">
            Why EZ Manga
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-manga-white">
            Built for readers,{" "}
            <span className="text-cyber-cyan">not browsers</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Every feature designed around one goal: getting out of the way so
            you can focus on the story.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-white/5 bg-surface p-6 hover:border-cyber-cyan/30 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Subtle gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{
                  background:
                    f.accent === "cyan"
                      ? "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(252,140,16,0.05) 0%, transparent 70%)"
                      : "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(255,87,34,0.05) 0%, transparent 70%)",
                }}
              />

              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-display font-semibold text-manga-white text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>

              {/* Corner accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{
                  background:
                    f.accent === "cyan" ? "#fc8c10" : "#FF5722",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
