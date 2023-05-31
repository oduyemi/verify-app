/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['ClashDisplayRegular', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        greene: "#226160",
        goldie: "#d0a465",
        blaq: "#050505",
        orange: "#a95f4d"
        
      }
    },
  },
  plugins: [],
}
