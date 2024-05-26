import plugin from "tailwindcss/plugin";
import hljsLight from "react-syntax-highlighter/dist/esm/styles/hljs/nord";
import hljsDark from "react-syntax-highlighter/dist/esm/styles/hljs/pojoaque";

const hljsLightClasses = Object.entries(hljsLight).reduce(
  (acc, [key, value]) => {
    acc[`& .${key}`] = value;
    return acc;
  },
  {},
);

const hljsDarkClasses = Object.entries(hljsDark).reduce((acc, [key, value]) => {
  acc[`& .${key}`] = value;
  return acc;
}, {});

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
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
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".hljs-codeblock": hljsLightClasses,
        ".hljs-codeblock-dark": hljsDarkClasses,
      });
    }),
  ],
};
