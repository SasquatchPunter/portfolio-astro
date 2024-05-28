import "astro";
declare module "astro" {
  interface AstroClientDirectives {
    "client:mouseover"?: boolean;
    "client:tina"?: boolean;
    "client:events"?: boolean;
  }
}
