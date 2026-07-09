function formatDate(dateStr) {
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
  } catch {
    return dateStr
  }
}

export default function NewsCard({ item }) {
  const jersey = String(item.id).padStart(2, '0')

  return (
    <article className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-gold/40 transition-colors">
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="font-display text-4xl text-gold/80 leading-none tabular-nums">
            {jersey}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-mint bg-mint/10 border border-mint/20 rounded-full px-2.5 py-1 shrink-0">
            {item.section}
          </span>
        </div>

        <h3 className="font-display text-2xl leading-tight text-chalk mb-2 group-hover:text-gold transition-colors">
          {item.headline}
        </h3>

        <p className="text-fog text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
          {item.abstract}
        </p>

        <div className="flex items-center justify-between text-xs font-mono text-fog/80 pt-3 border-t border-white/5">
          <span>{item.author}</span>
          <span>{formatDate(item.date)}</span>
        </div>

        <a
          href={item.article_uri}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-ink bg-gold rounded-full py-2.5 hover:brightness-95 transition"
        >
          Baca Selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </article>
  )
}
