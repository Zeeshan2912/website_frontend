/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-primary': '#ffc771', // Existing bright yellow - good for kids
        'button-secondary': '#5cacee', // Changed to a friendly blue
        'playful-green': '#66cc99',
        'soft-pink': '#f7a8b8',
        'bright-purple': '#9b59b6',
        // You can add more colors here
      },
      fontFamily: {
        neue: ["Neue Montreal", "sans-serif"], // Keep for potential specific use
        sans: ['Poppins', 'sans-serif'], // Set Poppins as default sans-serif
      },
    },
  },
  plugins: [],
}