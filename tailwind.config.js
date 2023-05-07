/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'cyan': 'brightness(75%) hue-rotate(180deg) saturate(300%)',
      },
    },
  },
  plugins: [],
}

