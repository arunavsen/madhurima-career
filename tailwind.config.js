/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f6f0e8",
        panel: "#dfd2c7",
        ink: "#2f2823",
        accent: "#8b644d",
        muted: "#6d6258"
      },
      boxShadow: {
        paper: "0 24px 60px rgba(81, 58, 43, 0.14)"
      },
      fontFamily: {
        sans: ["Manrope", "Segoe UI", "Arial", "sans-serif"],
        display: ["Noto Serif", "Georgia", "Times New Roman", "serif"]
      }
    }
  },
  plugins: []
};
