export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-wide text-chalk leading-none">SPORT</span>
          <span className="font-display text-2xl tracking-wide text-gold leading-none">WIRE</span>
        </div>

        <p className="text-fog text-sm font-mono text-center sm:text-left">
          Data berita dari Fake News API (Squirro Academy) — untuk keperluan tugas UAS.
        </p>

        <p className="text-fog text-xs">
          © {new Date().getFullYear()} SportWire. Dibuat dengan React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
