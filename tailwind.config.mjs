/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      /* Font Family */
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        paytone: ["Paytone One", "sans-serif"],
      },

      /* Font Sizes */
      fontSize: {
        custom54: ["3.375rem", { lineHeight: "1.15" }], // 54px
        custom40: ["2.5rem"], // 40px
      },

      /* Corner Radius */
      borderRadius: {
        custom50px: "50px",
      },

      /* Colors */
      colors: {
        transparent: "transparent",
        current: "currentColor",
        BarkingAtTheMoon: {
          opacity50: "#E2EBF4",
          100: "#C6D6EA",
          400: "#35577F",
          500: "#1C2E44",
        },

        GoldenRetriever: {
          100: "#FEFAF6",
          200: "#FCF3E6",
          500: "#F9E3C8",
        },

        SalmonTreat: {
          200: "#F9C9CB",
          300: "#F6ABAD",
          500: "#F17275",
          600: "#ED262B",
        },
      },

      spacing: {
        custom90: "90px",
        custom104: "104px",
      },

      cursor: {
        handcursor: "url(/tailscursor.svg) 25 25, pointer",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
