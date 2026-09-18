export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        school: {
          50: '#eef4ff',
          100: '#d8e5ff',
          600: '#0b5cff',
          700: '#0747d9',
          950: '#020817',
        },
      },
      fontFamily: {
        sans: [
          'Nunito',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        heading: ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        school: '0 24px 70px rgba(7, 71, 217, 0.14)',
      },
    },
  },
  plugins: [],
};
