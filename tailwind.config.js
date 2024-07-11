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
          '0%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-150px) translateX(150px)' },
          '100%': { transform: 'translateY(150px) translateX(0)' },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
      },
      boxShadow: {
        'lg-custom': '0 10px 15px -3px rgba(254, 216, 166, .5), 0 4px 6px -2px rgba(254, 216, 166, .25)',
      },
    },
  },
  plugins: [],
};
