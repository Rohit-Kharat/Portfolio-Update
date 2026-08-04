/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0d14',
        surface: {
          DEFAULT: '#111625',
          light: '#182035',
          border: '#232d48',
        },
        cyber: {
          cyan: '#00f0ff',
          violet: '#8a2be2',
          emerald: '#10b981',
          pink: '#ff007f',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-spin': 'glowSpin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(138, 43, 226, 0.15) 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(24, 32, 53, 0.7) 0%, rgba(17, 22, 37, 0.9) 100%)',
      },
    },
  },
  plugins: [],
};
