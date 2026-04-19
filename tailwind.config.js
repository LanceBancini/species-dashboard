// tailwind.config.js
/** @type {import('tailwindcss').Config} */
console.log('🎯 Tailwind Config wird geladen...');
module.exports = {
  debug: true,
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './test/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        pulseScale: {
          '0%, 100%': {
            transform: 'scale(0.9)',
            opacity: '0.5'
          },
          '50%': {
            transform: 'scale(1.8)',
            opacity: '1'
          }
        }
      },
      animation: {
        'pulse-scale': 'pulseScale 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
