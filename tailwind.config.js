/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      themes :["light", "cupcake"],
        fontFamily: {
          hirakakupro: [ 'HiraKakuPro', 'sans-serif'],
        },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

