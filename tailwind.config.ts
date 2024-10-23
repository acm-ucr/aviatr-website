/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aviatr: {
          "blue-600": "#0077BB",
          "blue-500": "#728BC3",
          "blue-400": "#72A8D1",
          "blue-300": "#7E95C9",
          "blue-200": "#AEBDE2",
          "blue-100": "#9DB7D2",
          "pink-200": "#EBB2F9",
          "pink-100": "#E4AEF6",
          "purple-100": "#AC9BDE",
        },
      },
      fontFamily: {
        jost: ["var(--font-jost)"],
        metrophobic: ["var(--font-metrophobic)"],
        "bungee-hairline": ["var(--font-bungee-hairline)"],
      },
      textShadow: {
        sm: "-1px 1px 0px var(--tw-shadow-color), 1px -1px 0px var(--tw-shadow-color), -1px -1px 0px var(--tw-shadow-color), 1px 1px 0px var(--tw-shadow-color), 0px -1px 0px var(--tw-shadow-color), 0px 1px 0px var(--tw-shadow-color)",
        DEFAULT:
          "-2px -2px 0px var(--tw-shadow-color), -1px -1px 0px var(--tw-shadow-color), 1px 1px 0px var(--tw-shadow-color), 2px 2px 0px var(--tw-shadow-color), 2px -2px 0px var(--tw-shadow-color), 1px -1px 0px var(--tw-shadow-color), -1px 1px 0px var(--tw-shadow-color), -2px 2px 0px var(--tw-shadow-color), -1px 2px 0px var(--tw-shadow-color), 0px 2px 0px var(--tw-shadow-color), 1px 2px 0px var(--tw-shadow-color), -1px -2px 0px var(--tw-shadow-color), 0px -2px 0px var(--tw-shadow-color), 1px -2px 0px var(--tw-shadow-color)",
        lg: "-3px -3px 0px var(--tw-shadow-color), -2px -2px 0px var(--tw-shadow-color), -1px -1px 0px var(--tw-shadow-color), 1px 1px 0px var(--tw-shadow-color), 2px 2px 0px var(--tw-shadow-color), 3px 3px 0px var(--tw-shadow-color), 3px -3px 0px var(--tw-shadow-color), 2px -2px 0px var(--tw-shadow-color), 1px -1px 0px var(--tw-shadow-color), -1px 1px 0px var(--tw-shadow-color), -2px 2px 0px var(--tw-shadow-color), -3px 3px 0px var(--tw-shadow-color), -2px 3px 0px var(--tw-shadow-color), -1px 3px 0px var(--tw-shadow-color), 0px 3px 0px var(--tw-shadow-color), 1px 3px 0px var(--tw-shadow-color), 2px 3px 0px var(--tw-shadow-color), -2px -3px 0px var(--tw-shadow-color), -1px -3px 0px var(--tw-shadow-color), 0px -3px 0px var(--tw-shadow-color), 1px -3px 0px var(--tw-shadow-color), 2px -3px 0px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
