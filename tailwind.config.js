/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#9ec1cc',
        'light-pink': '#f8cdc6',
        'text-white': '#f5efee',
      },
    },
  },
  plugins: [],
}
