"use client";

import { GooglePlayButton, AppStoreButton } from "./StoreButtons";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#06070a] via-[#0a0b10] to-[#06070a] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyber-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-10">
            {/* Hero Text */}
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <p className="text-cyber-cyan text-sm font-bold tracking-widest uppercase">Manga Reader App</p>
                <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
                  Read manga
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-orange-500">
                    your way
                  </span>
                </h1>
              </div>

              <p className="text-base text-gray-300 leading-relaxed max-w-md mx-auto">
                Clean reader, zero ads, instant loading. Your favorite sites, distraction-free.
              </p>

              {/* Download Buttons - High prominence */}
              <div className="flex flex-col gap-3 pt-2 w-full">
                <GooglePlayButton large />
                <AppStoreButton large />
              </div>
            </div>

            {/* Compact Screenshot */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyber-cyan/20 to-orange-500/20 rounded-2xl blur-xl" />
                {/* Screenshot frame */}
                <div className="relative rounded-2xl border border-white/10 bg-black overflow-hidden shadow-2xl w-56 sm:w-64" style={{ aspectRatio: "9/16" }}>
                  <img
                    src="/screenshots/screen-3.png"
                    alt="App interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-cyan">⚡</div>
                <p className="text-xs text-gray-400 mt-1">Fast</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">✨</div>
                <p className="text-xs text-gray-400 mt-1">Clean</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-cyan">🎯</div>
                <p className="text-xs text-gray-400 mt-1">Free</p>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Split screen */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center min-h-[90vh]">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-cyber-cyan text-sm font-bold tracking-widest uppercase">Manga Reader App</p>
                  <h1 className="text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight">
                    Read manga
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-orange-500 to-orange-400">
                      your way
                    </span>
                  </h1>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                  The manga reader designed for focus. Clean interface, zero clutter, instant loading from your favorite sites.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 max-w-sm pt-4">
                <GooglePlayButton large />
                <AppStoreButton large />
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-8 max-w-sm">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-cyber-cyan/50 transition-colors">
                  <div className="text-2xl mb-2">⚡</div>
                  <p className="text-sm font-semibold text-white">Instant Load</p>
                  <p className="text-xs text-gray-400 mt-1">Zero delays</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-orange-500/50 transition-colors">
                  <div className="text-2xl mb-2">✨</div>
                  <p className="text-sm font-semibold text-white">Ad-Free</p>
                  <p className="text-xs text-gray-400 mt-1">Pure reading</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-cyber-cyan/50 transition-colors">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="text-sm font-semibold text-white">No Tracking</p>
                  <p className="text-xs text-gray-400 mt-1">Private reading</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-orange-500/50 transition-colors">
                  <div className="text-2xl mb-2">🚀</div>
                  <p className="text-sm font-semibold text-white">Sync</p>
                  <p className="text-xs text-gray-400 mt-1">All devices</p>
                </div>
              </div>
            </div>

            {/* Right Column - Screenshot */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Dynamic glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyber-cyan/30 via-transparent to-orange-500/30 rounded-3xl blur-2xl opacity-60" />
                {/* Screenshot */}
                <div className="relative rounded-3xl border-8 border-gray-800/80 bg-black overflow-hidden shadow-[0_50px_150px_rgba(252,140,16,0.15)] w-72 xl:w-80" style={{ aspectRatio: "9/16" }}>
                  <img
                    src="/screenshots/screen-3.png"
                    alt="App interface"
                    className="w-full h-full object-cover"
                  />
                  {/* Glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06070a] to-transparent pointer-events-none" />
    </section>
  );
}

