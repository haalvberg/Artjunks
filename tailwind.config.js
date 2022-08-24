/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      serif: ['Libre Caslon Display', 'serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    }, 
    extend: {
      colors: {
        antilope: {
          500: '#D9852C',
        },
      },  
    },
  },
  plugins: [],
}
