/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#08080A',
          card: '#111116',
          cardHover: '#181820',
          surface: '#15151C',
          border: 'rgba(255, 255, 255, 0.08)',
          borderLight: 'rgba(255, 255, 255, 0.15)',
          // Golden Amber / Electric Yellow theme inspired by Omkar's avatar
          amber: '#FFC700',
          amberLight: '#FFD738',
          amberDark: '#F59E0B',
          amberGlow: 'rgba(255, 199, 0, 0.25)',
          orange: '#FB923C',
          emerald: '#10B981',
          muted: '#94A3B8',
          text: '#F8FAFC'
        }
      },
      fontFamily: {
        display: ['"Outfit"', '"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'glow-amber': '0 0 35px -5px rgba(255, 199, 0, 0.35)',
        'glow-amber-lg': '0 0 60px -10px rgba(255, 199, 0, 0.45)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)'
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'aurora-1': 'auroraOne 18s ease-in-out infinite alternate',
        'aurora-2': 'auroraTwo 22s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', filter: 'blur(35px)' },
          '50%': { opacity: '0.65', filter: 'blur(50px)' },
        },
        auroraOne: {
          '0%': { transform: 'translate(-15%, -10%) scale(1)' },
          '50%': { transform: 'translate(15%, 15%) scale(1.1)' },
          '100%': { transform: 'translate(-5%, 20%) scale(0.95)' },
        },
        auroraTwo: {
          '0%': { transform: 'translate(10%, 15%) scale(1.05)' },
          '50%': { transform: 'translate(-20%, -10%) scale(0.9)' },
          '100%': { transform: 'translate(8%, -15%) scale(1.15)' },
        }
      }
    },
  },
  plugins: [],
}
