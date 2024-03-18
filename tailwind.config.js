/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        berde: "#006341",
        violet: "#d5d0ea",
        lightviolet: "#f2f0eb",
        lightgreen: "#cee8c9",
        lightpink: "#f5cac4",
        lightblue: "#dbe6f2",
        lightorange: "#e99264",
      }
    },
  },
  plugins: [],
}

