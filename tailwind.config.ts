/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(12, 11, 24)',
        foreground: 'rgb(255, 255, 255)',
        primary: {
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
        secondary: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out both',
        glowPulse: 'glowPulse 2.4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate(100%)' },
          '100%': { transform: 'translate(-100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 #9333ea00' },
          '50%': { boxShadow: '0 0 25px 6px #9333ea40' },
        },
      },
    },
  },
  plugins: [],
}
