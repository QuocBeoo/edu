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
        business: "#d6a411",
        edu: "#02585e",
        fashion: "#ad0c5c",
        health: "#0e7c08",
        interview: "#0dbc99",
      },
      fontFamily: {
        encode: ["Encode Sans Condensed", "sans-serif"],
        lora: ["Lora", "sans-serif"],
        "dm-san": ["DM Sans", "sans-serif"],
      },
      transitionDuration: {
        250: "250ms",
      },
      boxShadow: {
        "hamburger-menu": "2px 2px 6px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
