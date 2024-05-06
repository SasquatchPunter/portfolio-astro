/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        seagreen: {
          0: "rgb(0,255,255)",
          1: "rgb(32,240,200)",
          2: "rgb(32,220,180)",
        },
      },
    },
  },
  plugins: [],
};
