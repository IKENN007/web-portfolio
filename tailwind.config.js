/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'prog-bg': "url('./images/prog-bg-1.jpg')",
      },
      colors: {
        primaryColor: '#415A77',
        secondaryColor: '#1B263B',
        darkColor: '#0D1B2A',
        lightColor: '#778DA9',
        customGray: '#E0E1DD',
        customYellow: '#ffbd39'
      }
    },
  },
  plugins: [],
};
