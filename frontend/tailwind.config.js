/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        pastel: {
          blue: '#E3F2FD',
          'blue-dark': '#90CAF9',
          green: '#E8F5E9',
          'green-dark': '#A5D6A7',
          lavender: '#F3E5F5',
          'lavender-dark': '#CE93D8',
          cream: '#FAFAF5',
          'gray': '#F5F5F0',
          'text': '#2D3748',
          'text-light': '#718096',
        }
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 8px 30px -4px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 30px rgba(144, 202, 249, 0.4)',
      }
    },
  },
  plugins: [],
}
