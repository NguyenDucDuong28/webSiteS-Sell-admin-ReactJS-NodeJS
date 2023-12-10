/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "color-bg": "#af0000", // Thay đổi mã màu thành mã màu bạn muốn
        "color-bg-menu": "#212529",
        "color-bg-nav": "#252525",
        "color-bg-page": "#f8f9fa",
      },
      textColor: {
        "color-nav-text": "#aaaaaa",
        "color-price": "#919191",
      },
    },
  },
};
