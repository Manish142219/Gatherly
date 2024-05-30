/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust this path if necessary
    './components/**/*.{js,ts,jsx,tsx}', // Adjust this path if necessary
  ],
  theme: {
    extend: {
      colors: {
        'grey-50': '#F9FAFB', // Add the custom color
        'grey-500': '#6B7280', // Add the custom color for placeholder text
        // Add any other custom colors you need here
      },
    },
  },
  plugins: [],
}
