/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: { "2xs": ["10px", "12px"] },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "celeste-1": "#4cb5f9",
        "celeste-2": "#0095f6",
        "celeste-3": "#e8f0fe",
        "color-facebook": "#00376b",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        7: "8px",
        8: "8px",
        9: "8px",
        10: "8px",
        11: "8px",
        12: "8px",
      },
      animation: {
        "fade-in-2s": "fadeIn 2s ease-in-out",
        "fade-in-1s": "fadeIn 1s ease-in-out",
        "fade-out-8s": "fadeOut 3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          opacity: "0",
        },
      },
    },
  },
  plugins: [],
};
