/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "bg-title": "#01A1A1",
        "background-home": "#EFEFF2",

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

