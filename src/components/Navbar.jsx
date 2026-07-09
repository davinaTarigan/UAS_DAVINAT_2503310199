import { useState } from 'react'

export default function Navbar({ query, onSearch, tickerHeadlines }) {
  const [draft, setDraft] = useState(query)

  function handleSubmit(e) {
    e.preventDefault()
    onSearch(draft)
  }

  const headlines = tickerHeadlines.length > 0 ? tickerHeadlines : ['Memuat berita terbaru...']
  const loopHeadlines = [...headlines, ...headlines]

  return (
    <header className="sticky top-0 z-50">
      {/* Live ticker strip — the signature element */}
      <div className="bg-gold text-ink overflow-hidden border-b border-ink/10">
        <div className="ticker-track py-1.5">
          {loopHeadlines.map((h, i) => (
            <span key={i} className="flex items-center whitespace-nowrap font-mono text-xs font-medium px-6">
              <span className="w-1.5 h-1.5 rounded-full bg-ink/60 mr-3 shrink-0" />
              {h}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-surface/95 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <a href="#top" className="flex items-baseline gap-2 shrink-0">
            <span className="font-display text-3xl tracking-wide text-chalk leading-none">SPORT</span>
            <span className="font-display text-3xl tracking-wide text-gold leading-none">WIRE</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-fog font-medium">
            <a href="#top" className="hover:text-chalk transition-colors">Beranda</a>
            <a href="#berita" className="hover:text-chalk transition-colors">Semua Berita</a>
          </nav>

          <form onSubmit={handleSubmit} className="sm:ml-auto w-full sm:w-80">
            <div className="relative">
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Cari berita olahraga..."
                className="w-full bg-surface2 text-chalk placeholder-fog/70 rounded-full pl-4 pr-11 py-2.5 text-sm border border-white/5 focus:outline-none focus:ring-2 focus:ring-gold/60 transition-shadow"
              />
              <button
                type="submit"
                aria-label="Cari"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gold text-ink flex items-center justify-center hover:brightness-95 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}
