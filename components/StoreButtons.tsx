const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.app.ezmanga";
const APP_STORE_URL =
  "https://apps.apple.com/app/ez-manga-web-browser/id6762126699";

export function GooglePlayButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-manga-white text-ink-black font-semibold rounded-xl hover:bg-cyber-cyan transition-colors group ${
        large ? "px-6 py-3.5 text-base" : "px-5 py-3 text-sm"
      }`}
    >
      <GooglePlayIcon className={large ? "w-6 h-6" : "w-5 h-5"} />
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-normal opacity-70">Get it on</span>
        <span>Google Play</span>
      </span>
    </a>
  );
}

export function AppStoreButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-flex items-center gap-3 border border-white/20 text-manga-white font-semibold rounded-xl hover:border-cyber-cyan hover:text-cyber-cyan transition-colors ${
        large ? "px-6 py-3.5 text-base" : "px-5 py-3 text-sm"
      }`}
    >
      <AppleIcon className={large ? "w-6 h-6" : "w-5 h-5"} />
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-normal opacity-70">Download on the</span>
        <span>App Store</span>
      </span>
    </a>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M3.18 23.76c.34.19.73.24 1.1.14L14.93 12 11.06 8.13 3.18 23.76z"
        fill="#EA4335"
      />
      <path
        d="M20.94 10.35l-2.75-1.57-3.26 3.22 3.26 3.22 2.77-1.59a1.57 1.57 0 000-3.28z"
        fill="#FBBC04"
      />
      <path
        d="M4.28.1a1.55 1.55 0 00-1.1.14L11.06 8.1 14.93 4.23 4.28.1z"
        fill="#4285F4"
      />
      <path
        d="M3.18.24C2.8.4 2.5.75 2.5 1.28v21.44c0 .53.3.88.68 1.04l11.75-11.75L3.18.24z"
        fill="#34A853"
      />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.65M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
