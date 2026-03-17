import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out both',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        fadeDown: 'fadeDown 0.6s ease-out forwards',
        fadeLeft: 'fadeLeft 0.6s ease-out forwards',
        fadeRight: 'fadeRight 0.6s ease-out forwards',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        'float-soft': 'floatSoft 3.2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.4s ease-in-out infinite',
        'bounce-slow': 'bounce 3.5s infinite',
        'pulse-slow': 'pulse 2.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translate(20px)' },
          '100%': { opacity: '1', transform: 'translate(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translate(-20px)' },
          '100%': { opacity: '1', transform: 'translate(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 #9333ea00' },
          '50%': { boxShadow: '0 0 25px 6px #9333ea40' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
