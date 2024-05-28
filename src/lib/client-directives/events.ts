import type { ClientDirective } from "astro";
export default (function (load, _opts, element) {
  const eventAttribute = "astro-event-copy";
  const elements = document.querySelectorAll(`button[${eventAttribute}]`);
  elements.forEach((el) => {
    el.addEventListener("click", (ev) => {
      const value = el.getAttribute(eventAttribute);
      navigator.clipboard.writeText(value);
    });
  });
} satisfies ClientDirective);
