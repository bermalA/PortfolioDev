const { transform } = require('next/dist/build/swc');

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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(50%)' },
        },
      },
      animation: {
        float: "float 2s ease-in-out infinite",
      },
      boxShadow: {
        'lg-custom': '0 3px 3px -3px rgba(254, 216, 166, .5), 0 6px 8px 3px rgba(254, 216, 166, .2)',
        'shadow-box' : '0 3px 3px -3px rgba(219, 132, 101, .5), 0 6px 8px 3px rgba(219, 132, 101, .2)'
      },
    },
  },
  plugins: [],
};
