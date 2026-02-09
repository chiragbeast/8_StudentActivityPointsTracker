/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#9a28eb",
        "accent-blue": "#0e21a0",
        "background-light": "#f7f6f8",
        "background-dark": "#000000",
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"],
        "heading": ["Poppins", "sans-serif"],
        "body": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
