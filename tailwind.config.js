/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1F44',
          dark:    '#071530',
          mid:     '#102a58',
        },
        accent: {
          DEFAULT: '#F05A28',
          dark:    '#d94e20',
        },
        brand: {
          light:   '#F5F7FA',
          heading: '#1A1A2E',
          body:    '#555670',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card:  '0 4px 16px rgba(0,0,0,0.08)',
        hover: '0 8px 32px rgba(0,0,0,0.14)',
        float: '0 8px 32px rgba(0,0,0,0.20)',
      },
      borderRadius: {
        card: '8px',
        btn:  '4px',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'fade-in':   'fade-in 0.6s ease forwards',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.55', transform: 'scale(1.4)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
