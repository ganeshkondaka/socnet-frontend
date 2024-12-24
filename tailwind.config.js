/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cust": ["Tiny5", "cursive"],
      },
      boxShadow: {
        neon: "0 0 10px rgba(72, 187, 255, 0.7), 0 0 20px rgba(72, 187, 255, 0.5)",
      },
    },
  },
  plugins: [],
}

