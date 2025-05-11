/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "spin-once": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-once": "spin-once 0.6s ease-in-out 1",
      },
      // colors: {
      //   background: "#0b0f19",
      //   card: "#111827",
      //   accent: "#3b82f6",
      //   textPrimary: "#ffffff",
      //   textSecondary: "#9ca3af",
      // },
      // fontFamily: {
      //   sans: ["Inter", "sans-serif"],
      // },
    },
  },
  safelist: ["shadow-[0_0_20px_rgba(192,132,252,0.6)]"],
  plugins: [],
};
