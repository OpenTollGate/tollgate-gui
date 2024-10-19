/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    'node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}', // Adjust based on your setup
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  plugins: [require('@material-tailwind/react')],
}

