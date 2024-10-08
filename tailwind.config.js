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
      }
    }
  },
  plugins: [],
}