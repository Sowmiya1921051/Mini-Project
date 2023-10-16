/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom': '#32243c',
        'custom-color': '#AD1AAF',
      },
    },
  },
  plugins: [],
}