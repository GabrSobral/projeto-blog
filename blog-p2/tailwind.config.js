const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/images/banner.svg')",
        banner2: "url('/images/banner-2.svg')",
        "banner-3": "url('/images/banner-3.jpg')",
        circles: "url('/images/bg-circles.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
