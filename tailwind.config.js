// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neomorphism': '5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff',
        'neomorphism-hover': '10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff',
        'neomorphism-inset': 'inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff',
        'neomorphism-dark': '5px 5px 10px #151515, -5px -5px 10px #1f1f1f',
        'neomorphism-hover-dark': '10px 10px 20px #151515, -10px -10px 20px #1f1f1f',
        'neomorphism-inset-dark': 'inset 5px 5px 10px #151515, inset -5px -5px 10px #1f1f1f',
      }
    }
  },
  plugins: [],
}