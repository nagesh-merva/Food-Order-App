/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Heavitas: ['Heavitas'],
        poppins: ['Poppins', 'sans-serif'],
        galada: ['Galada', 'sans-serif'],
      },
      colors: {
        "zred": "#FF6F61",
      }
    },
  },
  plugins: [],
}
