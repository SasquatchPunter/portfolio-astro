import type { ClientDirective } from "astro";
export default (function (load, _opts, element) {
  const isEditor =
    window.frameElement && window.frameElement.id === "tina-iframe";
  if (isEditor) {
    load().then((hydrate) => hydrate());
  }
} satisfies ClientDirective);
