/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      themes :["light", "dard", "cupcake"],
        fontFamily: {
          hirakakupro: [ 'HirakakuPro', 'sans-serif'],
        },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

