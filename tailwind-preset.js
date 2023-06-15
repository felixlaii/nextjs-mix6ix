const { red } = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  variants: {
    animation: ["motion-safe"],
  },
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        brand: {
          evenLighter: "#ABA8A6",
          lighter: "#4A4846",
          base: "#1A1918",
          dark: "#292827",
          darkest: "#000000",
          gold: "#AA8548",
        },
        ui: {
          error: red[700],
        },
      },
    },
    textShadow: {
      sm: "0 1px 10px var(--tw-shadow-color)",
      DEFAULT: "0 2px 10px var(--tw-shadow-color)",
      lg: "0 8px 16px var(--tw-shadow-color)",
    },
  },
};
