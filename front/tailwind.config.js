/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Terracotta Eléctrico - Energía vital, tierra fértil
        terracotta: {
          50: '#FFF5F2',
          100: '#FFE8E1',
          200: '#FFD1C1',
          300: '#FFB096',
          400: '#FF8A65',
          500: '#FF6B35',
          600: '#D84315',
          700: '#C4461D',
          800: '#9F3718',
          900: '#7D2D14',
        },
        // Púrpura Andino - Espiritualidad, sabiduría ancestral
        'purple-andino': {
          50: '#F3E8FF',
          100: '#E9D5FF',
          200: '#D8B4FE',
          300: '#C084FC',
          400: '#9D4EDD',
          500: '#7B2CBF',
          600: '#5A189A',
          700: '#4C148F',
          800: '#3C1071',
          900: '#240754',
        },
        // Turquesa Glaciar - Pureza, agua sagrada, innovación
        'turquoise-glaciar': {
          50: '#E0FFFE',
          100: '#B9FFFD',
          200: '#90E0EF',
          300: '#48CAE4',
          400: '#00B4D8',
          500: '#06FFF0',
          600: '#0096C7',
          700: '#0077B6',
          800: '#005F8F',
          900: '#023E5C',
        },
        // Índigo Nocturno - Profundidad, cosmos, misterio
        'indigo-nocturno': {
          50: '#E7E9F0',
          100: '#C8CDDE',
          200: '#8F96B8',
          300: '#5A638F',
          400: '#3A426E',
          500: '#2D3561',
          600: '#1A1F3A',
          700: '#16192E',
          800: '#0F1123',
          900: '#0A0C1A',
        },
        // Dorado Solar - Inti Raymi, abundancia, divinidad
        'gold-solar': {
          50: '#FFFBEA',
          100: '#FFF3C4',
          200: '#FFE999',
          300: '#FFDC6E',
          400: '#FFC93C',
          500: '#FFB800',
          600: '#E5A300',
          700: '#CC8F00',
          800: '#A37200',
          900: '#7A5600',
        },
        // Verde Chakra - Pacha Mama, crecimiento, sanación
        'green-chakra': {
          50: '#E8FDF5',
          100: '#C3FAE8',
          200: '#7EF4D2',
          300: '#52B788',
          400: '#40916C',
          500: '#06D6A0',
          600: '#05B385',
          700: '#048C6A',
          800: '#036653',
          900: '#024D3E',
        },
        // Fucsia Ritual - Puntos focales, elementos sorpresa
        'fucsia-ritual': {
          500: '#F72585',
          600: '#D91E6F',
          700: '#B01858',
        },
        // Coral Ceremonial - Gradientes, transiciones (mantener si son necesarios como colores sólidos)
        'coral-ceremonial': {
          500: '#FF5D8F',
          600: '#E54D7F',
          700: '#CC3E6E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Poppins', 'Outfit', 'system-ui', 'sans-serif'],
        ceremonial: ['Cinzel', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'pacha-breath': 'pacha-breath 4s ease-in-out infinite',
        'chakra-ripple': 'chakra-ripple 1.5s ease-out',
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
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pacha-breath': {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.03)', filter: 'brightness(1.1)' },
        },
        'chakra-ripple': {
          '0%': { boxShadow: '0 0 0 0 rgba(6, 255, 240, 0.7)' },
          '100%': { boxShadow: '0 0 0 30px rgba(6, 255, 240, 0)' },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 40px rgba(123, 44, 191, 0.3)',
        'glow-turquoise': '0 0 40px rgba(6, 255, 240, 0.3)',
        'glow-gold': '0 0 40px rgba(255, 184, 0, 0.3)',
        'neo-1': '0 2px 8px rgba(123, 44, 191, 0.1), 0 8px 32px rgba(255, 107, 53, 0.08)',
        'neo-2': '0 10px 40px rgba(26, 31, 58, 0.2), 0 0 80px rgba(6, 255, 240, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'neo-3': '0 20px 60px rgba(247, 37, 133, 0.3), 0 0 100px rgba(255, 184, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
