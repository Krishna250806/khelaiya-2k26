/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        festive: {
          maroon: {
            DEFAULT: '#5f1040',
            deep: '#3a0826',
            darker: '#250417',
            light: '#801857',
            soft: '#9b246c',
          },
          gold: {
            DEFAULT: '#febf4a',
            light: '#ffd982',
            pale: '#fff0c2',
            dark: '#c48b1a',
            deep: '#9c6c0b',
          },
          teal: {
            DEFAULT: '#0f4d5b',
            deep: '#072b33',
            darker: '#041c22',
            light: '#186d80',
            bright: '#238ca3',
          },
        }
      },
      fontFamily: {
        nuv: ['"Cinzel Decorative"', 'serif'],
        khelaiya: ['"Khand"', 'sans-serif'],
        khand: ['"Khand"', 'sans-serif'],
        display: ['"Rozha One"', '"Yatra One"', '"Cinzel Decorative"', 'serif'],
        royal: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-maroon-teal': 'linear-gradient(135deg, #5f1040 0%, #2f204a 50%, #0f4d5b 100%)',
        'gradient-gold-maroon': 'linear-gradient(135deg, #febf4a 0%, #bf6d3b 50%, #5f1040 100%)',
        'gradient-teal-maroon': 'linear-gradient(180deg, #0f4d5b 0%, #301f40 50%, #5f1040 100%)',
        'gradient-festive-radial': 'radial-gradient(circle at center, #5f1040 0%, #1c0618 60%, #090108 100%)',
        'gradient-gold-shimmer': 'linear-gradient(90deg, #febf4a 0%, #fff2be 50%, #febf4a 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(254, 191, 74, 0.45)',
        'gold-glow-lg': '0 0 45px rgba(254, 191, 74, 0.6)',
        'maroon-glow': '0 0 30px rgba(95, 16, 64, 0.6)',
        'teal-glow': '0 0 30px rgba(15, 77, 91, 0.5)',
        'festive-card': '0 10px 30px -5px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(254, 191, 74, 0.25)',
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'spin-reverse': 'spin-rev 28s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      },
      keyframes: {
        'spin-rev': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.04)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
