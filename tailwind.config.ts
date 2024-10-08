/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#16e0bd',
        'secondary': '#1a1a2e',
      },
    },
  },
  plugins: [],
}