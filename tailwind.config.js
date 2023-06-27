/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        lighBlue: "#e1edff",
        textSaleBlue: "#0000ff",
        textBlue: "#0062f5",
        blackButton: "#212121",
        textBlack: "#212121",
        textGrey: "#666",
        circleCream: "#ffece3",
        backgroundGrey: "#f2f3f7",
      },
    },
  },
  plugins: [],
};
