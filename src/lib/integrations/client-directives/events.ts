import type { AstroIntegration } from "astro";
export default (): AstroIntegration => ({
  name: "client:events",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "events",
        entrypoint: "./src/lib/client-directives/events.ts",
      });
    },
  },
});
