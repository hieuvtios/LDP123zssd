export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-cyber-cyan font-display font-bold text-lg">EZ</span>
            <span className="font-display font-bold text-lg text-manga-white">Manga</span>
          </div>
          <p className="text-muted text-xs">The browser built for manga fans</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-muted">
          <a href="#" className="hover:text-manga-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-manga-white transition-colors">
            Contact
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.app.ezmanga"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber-cyan transition-colors"
          >
            Google Play
          </a>
        </div>

        {/* Copyright */}
        <p className="text-muted/50 text-xs text-center sm:text-right">
          © 2026 EZ Apps Studio
          <br />
          <span className="text-[10px]">Content Rating: Mature 17+</span>
        </p>
      </div>
    </footer>
  );
}
