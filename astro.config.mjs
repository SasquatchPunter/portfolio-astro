import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import mouseoverDirective from "./src/lib/integrations/client-directives/mouseover";
import tinaDirective from "./src/lib/integrations/client-directives/tina";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind(),
    react(),
    icon(),
    mouseoverDirective(),
    tinaDirective(),
  ],
  outDir: "build",
  devToolbar: {
    enabled: false,
  },
  base: "/dev",
});
