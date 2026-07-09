/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1120",
        surface: "#131B2E",
        surface2: "#1B2540",
        gold: "#F2C230",
        mint: "#3DDC97",
        crimson: "#EF5B5B",
        fog: "#8B93A7",
        chalk: "#F5F7FA",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}
