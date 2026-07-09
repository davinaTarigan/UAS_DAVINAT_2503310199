import NewsCard from './NewsCard.jsx'

function SkeletonCard() {
  return (
    <div className="bg-surface border border-white/5 rounded-2xl p-5 animate-pulse">
      <div className="h-8 w-10 bg-white/5 rounded mb-4" />
      <div className="h-6 w-3/4 bg-white/5 rounded mb-3" />
      <div className="h-3 w-full bg-white/5 rounded mb-2" />
      <div className="h-3 w-5/6 bg-white/5 rounded mb-4" />
      <div className="h-9 w-full bg-white/5 rounded-full" />
    </div>
  )
}

export default function NewsList({ items, loading, error, query, hasMore, onLoadMore, loadingMore }) {
  if (error) {
    return (
      <div className="text-center py-20 border border-crimson/20 bg-crimson/5 rounded-2xl">
        <p className="font-display text-2xl text-crimson mb-2">Gagal memuat berita</p>
        <p className="text-fog text-sm">{error}</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20 border border-white/5 bg-surface rounded-2xl">
        <p className="font-display text-3xl text-chalk mb-2">Tidak ada hasil</p>
        <p className="text-fog text-sm">
          {query ? `Tidak ditemukan berita untuk "${query}".` : 'Belum ada berita untuk ditampilkan.'}
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      {hasMore && !query && (
        <div className="flex justify-center mt-10">
          <button
            onClick={onLoadMore}
            disabled={loadingMore}
            className="font-mono text-sm tracking-wide uppercase text-ink bg-gold hover:brightness-95 disabled:opacity-50 rounded-full px-8 py-3 transition"
          >
            {loadingMore ? 'Memuat...' : 'Muat Lebih Banyak'}
          </button>
        </div>
      )}
    </div>
  )
}
