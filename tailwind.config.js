/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "primary":"hsl(193, 38%, 86%)",
      "primary-100":"hsl(150, 100%, 66%)",
      "blue-500":"hsl(217, 19%, 38%)",
      "blue-600":"hsl(217, 19%, 24%)",
      "blue-900":"hsl(218, 23%, 16%)",
      "gray-200":"hsl(217, 12%, 63%)",
      "white":"hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
}

