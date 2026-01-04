import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // 1. 基本のフォント (font-sans)
        // Inter を優先し、なければ Noto Sans JP
        sans: ["var(--font-inter)", "var(--font-noto-sans-jp)", ...defaultTheme.fontFamily.sans],

        // 2. タイトル用のフォント (font-heading というクラスを作る)
        // Renner* を優先し、なければ Noto Sans JP
        heading: ["var(--font-renner)", "var(--font-noto-sans-jp)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};