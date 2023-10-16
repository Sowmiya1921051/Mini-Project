/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet-black': '#140C1F',
        'violet': '#AD1AAF',
      },
      fontSize: {
        '64': '64px', // Add your custom font size
      },
      fontFamily: {
        'oxanium': ['Oxanium', 'sans'], // 'sans' is a generic fallback font-family
      },
      fontWeight: {
        '600': '600',
      },
    },
  },
  plugins: [],
}