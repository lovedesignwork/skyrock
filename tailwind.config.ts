import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sky Rock NEW Brand Colors - Forest/Nature Theme
        primary: {
          DEFAULT: '#1B4332', // Deep forest green
          dark: '#0D2818',
          light: '#2D6A4F',
        },
        accent: {
          DEFAULT: '#D4A373', // Warm sand/copper
          dark: '#BC8A5F',
          light: '#E9C46A',
        },
        forest: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        earth: {
          50: '#FEFDFB',
          100: '#FDF8F3',
          200: '#F5E6D3',
          300: '#E9C46A',
          400: '#D4A373',
          500: '#BC8A5F',
          600: '#A47148',
          700: '#8B5E34',
          800: '#6B4423',
          900: '#4A2C17',
        },
        background: {
          DEFAULT: '#0A1612',
          dark: '#050B09',
          light: '#132A23',
        },
        foreground: {
          DEFAULT: '#F8FAF9',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'leaf-fall': 'leafFall 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        leafFall: {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'forest-gradient': 'linear-gradient(135deg, #0D2818 0%, #1B4332 50%, #2D6A4F 100%)',
        'earth-gradient': 'linear-gradient(135deg, #4A2C17 0%, #8B5E34 50%, #D4A373 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
