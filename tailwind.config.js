/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('rippleui')],
  rippleui: {
    // themes: [
    //   {
    //     themeName: 'light',
    //     colorScheme: 'light',
    //     colors: {
    //       primary: '#235264',
    //       backgroundPrimary: '#EEEEEE',
    //     },
    //   },
    //   {
    //     themeName: 'dark',
    //     colorScheme: 'dark',
    //     colors: {
    //       primary: '#573242',
    //       backgroundPrimary: '#222831',
    //     },
    //   },
    // ],
  },
};
