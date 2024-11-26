/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#668D12",
        secondary: "#ACC43F",
        tertiary: "#F2F8DF",
      },
    },
  },
  plugins: [],
};
