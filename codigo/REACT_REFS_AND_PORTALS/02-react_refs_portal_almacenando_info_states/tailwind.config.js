/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        mono: ['Handjet', 'monospace'],
      },
      keyframes: {
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-15%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        flash: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'slide-in-from-top': 'slide-in-from-top 0.35s ease-out',
        flash: 'flash 1s infinite',
      },
    },
  },
  plugins: [],
};
