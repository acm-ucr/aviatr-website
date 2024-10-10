/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.5rem",
        "3xs": "0.35rem",
      },
    },
  },
  plugins: [],
};
