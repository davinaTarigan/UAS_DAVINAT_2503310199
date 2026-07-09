# uas_davina_2503310199

Project UAS — Aplikasi berita olahraga menggunakan React JS + Tailwind CSS, data diambil dari Fake News API (`https://fakenews.squirro.com/news/sport`).

## Fitur
- Navbar + Footer
- Menampilkan data berita dari API (dengan tombol "Muat Lebih Banyak" / pagination)
- Fitur search/pencarian berita (client-side, berdasarkan judul, ringkasan, dan penulis)
- Styling dengan Tailwind CSS, responsive (mobile, tablet, desktop)

## Cara menjalankan di VS Code

1. Buka folder ini di VS Code.
2. Buka terminal (Terminal > New Terminal), lalu jalankan:
   ```bash
   npm install
   npm run dev
   ```
3. Buka browser ke alamat yang muncul di terminal (biasanya `http://localhost:5173`).

## Struktur folder
```
src/
  components/
    Navbar.jsx      -> navbar + search bar + ticker berita
    Footer.jsx       -> footer
    NewsCard.jsx     -> kartu untuk 1 berita
    NewsList.jsx     -> grid berita + loading/error/empty state
  App.jsx            -> logic fetch data & search
  main.jsx           -> entry point React
  index.css          -> Tailwind + custom style
```

## Build untuk production
```bash
npm run build
```
Hasil build ada di folder `dist/`.
