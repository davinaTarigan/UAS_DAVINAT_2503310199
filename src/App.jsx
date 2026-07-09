import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import NewsList from './components/NewsList.jsx'

const API_URL = 'https://fakenews.squirro.com/news/sport'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [next, setNext] = useState(0)
  const [eof, setEof] = useState(false)

  async function fetchNews(since = 0, append = false) {
    try {
      append ? setLoadingMore(true) : setLoading(true)
      setError(null)
      const res = await fetch(`${API_URL}?since=${since}&count=9`)
      if (!res.ok) throw new Error(`Status ${res.status}`)
      const data = await res.json()
      setArticles((prev) => (append ? [...prev, ...data.news] : data.news))
      setNext(data.next)
      setEof(data.eof)
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat mengambil data.')
    } finally {
      append ? setLoadingMore(false) : setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews(0, false)
  }, [])

  const filtered = useMemo(() => {
    if (!query.trim()) return articles
    const q = query.trim().toLowerCase()
    return articles.filter(
      (item) =>
        item.headline.toLowerCase().includes(q) ||
        item.abstract.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q)
    )
  }, [articles, query])

  const tickerHeadlines = useMemo(() => articles.slice(0, 8).map((a) => a.headline), [articles])

  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Navbar query={query} onSearch={setQuery} tickerHeadlines={tickerHeadlines} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6">
        <section className="py-10 sm:py-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">Live Sport Desk</span>
          <h1 className="font-display text-4xl sm:text-6xl leading-[0.95] text-chalk mt-3 max-w-2xl">
            Kabar Terbaru dari Dunia Olahraga
          </h1>
          <p className="text-fog mt-4 max-w-xl text-sm sm:text-base">
            Kumpulan berita olahraga terkini, diperbarui langsung dari sumber berita. Gunakan kolom pencarian untuk menemukan topik yang kamu minati.
          </p>
        </section>

        <section id="berita" className="pb-16">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-2xl text-chalk tracking-wide">
              {query ? `Hasil untuk "${query}"` : 'Semua Berita'}
            </h2>
            {!loading && !error && (
              <span className="font-mono text-xs text-fog">{filtered.length} artikel</span>
            )}
          </div>

          <NewsList
            items={filtered}
            loading={loading}
            error={error}
            query={query}
            hasMore={!eof}
            loadingMore={loadingMore}
            onLoadMore={() => fetchNews(next, true)}
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
