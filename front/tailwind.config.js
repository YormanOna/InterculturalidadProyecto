/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Terracotta/Clay - Traditional pottery and earth (mejorado)
        terracotta: {
          50: '#FFF5F2',
          100: '#FFE8E1',
          200: '#FFD1C1',
          300: '#FFB096',
          400: '#FF8A61',
          500: '#FF6B35',
          600: '#E85A28',
          700: '#C4461D',
          800: '#9F3718',
          900: '#7D2D14',
        },
        // Deep Gold - Corn, sun worship, precious metals (más vibrante)
        gold: {
          50: '#FFFBF0',
          100: '#FFF4D4',
          200: '#FFE9A8',
          300: '#FFD97D',
          400: '#FFC652',
          500: '#FFB027',
          600: '#FF9800',
          700: '#E68900',
          800: '#B36B00',
          900: '#804D00',
        },
        // Forest Green - Fertile valleys and agriculture (más natural)
        forest: {
          50: '#F2F8F4',
          100: '#DCEEE3',
          200: '#B9DDC7',
          300: '#8BC9A4',
          400: '#5DB07E',
          500: '#3D9A62',
          600: '#2E7D4F',
          700: '#236140',
          800: '#1A4C32',
          900: '#133A27',
        },
        // Sky Blue - Andean skies and sacred waters (más brillante)
        sky: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#B9E6FE',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        // Warm Cream - Natural wool and traditional textiles (más cálido)
        cream: {
          50: '#FEFDFB',
          100: '#FEF9F3',
          200: '#FDF3E7',
          300: '#FCEAD5',
          400: '#FADDB8',
          500: '#F7CF9B',
          600: '#E5B679',
          700: '#C99855',
          800: '#A07A3E',
          900: '#765A2D',
        },
        // Nueva paleta: Sunset Orange - Atardeceres andinos
        sunset: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        // Nueva paleta: Purple - Montañas al amanecer
        mountain: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#581C87',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #FDF3E7 0%, #FFE8E1 50%, #FFF4D4 100%)',
        'gradient-cultural': 'linear-gradient(135deg, #FF6B35 0%, #FFB027 50%, #3D9A62 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #F97316 0%, #FB923C 50%, #FDBA74 100%)',
        'gradient-andean': 'linear-gradient(135deg, #A855F7 0%, #0EA5E9 50%, #3D9A62 100%)',
      },
    },
  },
  plugins: [],
}
