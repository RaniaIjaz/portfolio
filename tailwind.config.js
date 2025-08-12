// /** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//     colors: {
//       ...colors,
//       primary: colors.purple,
//       secondary: colors.pink,
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class', // Add this line to enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: { // Move colors inside extend to preserve default colors
        primary: {
          // light: colors.purple[500], // Light mode primary
          // dark: colors.purple[300],  // Dark mode primary
          // DEFAULT: colors.purple[500], // Default (light mode)
          400: '#a78bfa', // lighter purple for dark mode
          500: '#8b5cf6', // base purple
          600: '#7c3aed', // darker for hover
        },
        secondary: {
          // light: colors.pink[500],   // Light mode secondary
          // dark: colors.pink[300],    // Dark mode secondary
          // DEFAULT: colors.pink[500], // Default (light mode)
           400: '#f472b6', // lighter pink for dark mode
          500: '#ec4899', // base pink
          600: '#db2777', // darker for hover
        },
        light: {
          bg: colors.white,
          text: colors.gray[900],
        },
        dark: {
          bg: colors.gray[900],
          text: colors.gray[50],
        },
      },
    },
  },
  plugins: [],
};