import type { AstroIntegration } from "astro";
export default (): AstroIntegration => ({
  name: "client:tina",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "tina",
        entrypoint: "./src/lib/client-directives/tina.ts",
      });
    },
  },
});
