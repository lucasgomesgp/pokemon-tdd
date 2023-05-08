/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "bg-title": "#01A1A1",
        "background-home": "#EFEFF2",
        "progress-pokemon": "#EEEEEE",
        "circle-pokemon": "#F0F0F3",
        "normal": "#A8A878",
        "fire": "#F08030",
        "water": "#6890F0",
        "grass": "#78C850",
        "electric": "#F8D030",
        "ice": "#AFDCE3",
        "fighting": "#C03028",
        "poison": "#A040A0",
        "ground": "#E0C068",
        "flying": "#A890F0",
        "psychic": "#F85888",
        "bug": "#A8B820",
        "rock": "#B8A038",
        "ghost": "#705898",
        "dark": "#705848",
        "dragon": "#7038F8",
        "steel": "#FFFFFF",
        "fairy": "#F0B6BC",

      }
    },
    fontFamily:{
      "poppins": ["Poppins", "sans-serif"],
      "roboto": ["Roboto", "sans-serif"],
      "montserrat": ["Montserrat", "sans-serif"],
    }
  },
  plugins: [],
}

