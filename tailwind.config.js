/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
      'md': '1024px'
    },
    extend: {
      colors: {
        'almost-white': 'hls(0, 0%, 98%)',
        'medium-gray': 'hls(0, 0%, 41%)',
        'almost-black': 'hls(0, 0%, 8%)'
      }
    },
  },
  plugins: [],
}

