/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: {
    50: '#f4f6fb',
    100: '#e9edf5',
    200: '#cedae9',
    300: '#a3bbd6',
    400: '#7196bf',
    500: '#4f78a8',
    600: '#3d608c',
    700: '#324d72',
    800: '#2c4360',
    900: '#293951',
    950: '#1e293b'
        },
        secondary: { // daintree
          50: "#eafffd",
          100: "#cbfffb",
          200: "#9dfffa",
          300: "#59fffa",
          400: "#0ffaff",
          500: "#00dce7",
          600: "#00afc2",
          700: "#028b9c",
          800: "#0c6f7e",
          900: "#0f5a6a",
          950: "#02343f",
        },
       
      },
    },
  },
  plugins: [],
};
