/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "black-primary-news": "#1d2027",
        "sub-title-news": "#494949",
        "info-news": "#767676",
        "line-d7": "#d7d7d7",
        "detail-gray": "#7a7e83",
        "info-news-dark": "#dbdbdb",
        "primary-active": "#f91212",
        "d-main-color": "#0a0d12",
        "d-sub-title-news": "#989898",
      },
      fontFamily: {
        encode: ["Encode Sans Condensed", "sans-serif"],
        lora: ["Lora", "sans-serif"],
        "dm-san": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
