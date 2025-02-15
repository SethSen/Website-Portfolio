/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0A090C',
          800: '#17161A',
          700: '#242329',
        },
        secondary: {
          900: '#F7F5FF',
          800: '#F2F0FA',
          700: '#E8E6F2',
          200: '#D1CFE6',
          100: '#C8C6DD',
          50: '#BEBAD4',
        },
        accent: {
          600: '#2E1065',
          500: '#4C1D95',
          400: '#6D28D9',
        },
        purple: {
          900: '#2E1065',
          800: '#4C1D95',
          700: '#6D28D9',
          600: '#7C3AED',
          500: '#8B5CF6',
          400: '#A78BFA',
          300: '#C4B5FD',
          200: '#DDD6FE',
          100: '#EDE9FE',
          50: '#F5F3FF',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'matrix-rain': 'matrix 20s linear infinite',
        'float': 'floating 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px theme(colors.purple.600), 0 0 20px theme(colors.purple.600)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 20px theme(colors.purple.600), 0 0 50px theme(colors.purple.600)',
            transform: 'scale(1.05)'
          }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #2E1065 0%, #4C1D95 50%, #2E1065 100%)',
        'secondary-gradient': 'linear-gradient(to right, #F7F5FF, #E8E6F2, #F7F5FF)',
        'cyber-grid': 'linear-gradient(var(--accent-600) 1px, transparent 1px), linear-gradient(90deg, var(--accent-600) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      }
    },
  },
  plugins: [],
};