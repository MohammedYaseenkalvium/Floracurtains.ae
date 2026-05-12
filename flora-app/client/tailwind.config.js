/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#5A0E12',
        'primary-container': '#7A1C22',
        'primary-fixed': '#f5ddd9',
        'primary-fixed-dim': '#e8bdb8',
        'on-primary': '#ffffff',
        'on-primary-fixed': '#3a0509',
        secondary: '#6b5e5a',
        'secondary-container': '#e8dedd',
        'on-secondary': '#ffffff',
        tertiary: '#7a6a55',
        'tertiary-container': '#c8a97e',
        'on-tertiary': '#ffffff',
        gold: '#C8A97E',
        'gold-light': '#e8d5b4',
        background: '#F8F5F2',
        'on-background': '#1A1A1A',
        surface: '#FFFDFC',
        'on-surface': '#1A1A1A',
        'surface-variant': '#ede8e4',
        'on-surface-variant': '#4a403c',
        'surface-container': '#f2eeeb',
        'surface-container-low': '#f9f6f4',
        'surface-container-high': '#ece7e3',
        'surface-container-highest': '#e5dfdb',
        outline: '#8c7f79',
        'outline-variant': '#d4cac6',
        'inverse-surface': '#2c2420',
        'inverse-on-surface': '#f5efec',
        'inverse-primary': '#e8bdb8',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
      },
      fontFamily: {
        luxury: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
        // aliases so old code still works
        headline: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3.5rem,8vw,7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '400' }],
        'headline-xl': ['clamp(2.5rem,5vw,4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '400' }],
        'headline-lg': ['clamp(2rem,3.5vw,3rem)', { lineHeight: '1.15', fontWeight: '400' }],
        'headline-md': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
        'label-caps': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '600' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'bounce-slow': 'bounce 2.5s infinite',
        'slow-zoom': 'slowZoom 12s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        '3xl': '40px',
      },
    },
  },
  plugins: [],
}
 