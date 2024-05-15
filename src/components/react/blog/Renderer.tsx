import { unified } from "unified";
import * as prod from "react/jsx-runtime";
import * as dev from "react/jsx-dev-runtime";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact, { type Options } from "rehype-react";

import type { RehypeShikiOptions } from "@shikijs/rehype";
import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import { getHighlighterCore } from "shiki";

import { H1, Code, Pre, Img } from "@components/react/blog/markdown";

const highlighter = await getHighlighterCore({
  themes: [
    import("shiki/themes/andromeeda.mjs"),
    import("shiki/themes/nord.mjs"),
  ],
  langs: [import("shiki/langs/javascript.mjs")],
  loadWasm: import("shiki/wasm"),
});

const rehypeShikiOptions: RehypeShikiOptions = {
  theme: "nord",
};

const components: Options["components"] = {
  h1: H1,
  img: Img,
  //   code: Code, // will overwrite Shiki's hast output
  // pre: Pre, // will overwrites Shiki's hast output
};

const rehypeReactDev: Options = {
  development: true,
  Fragment: dev.Fragment,
  jsxDEV: dev.jsxDEV,
  components,
};

const rehypeReactProd: Options = {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
  components,
};

/**
 * Takes a markdown string as a child and returns a rendered React tree
 * using a custom component library.
 *
 * _This uses a custom `unified` processor with `remark` and `rehype`
 * that is distinct from Astro's off-the-shelf integration._
 */
export default function Renderer({ children }) {
  function render(text) {
    return unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeShikiFromHighlighter, highlighter, rehypeShikiOptions)
      .use(rehypeReact, import.meta.env.PROD ? rehypeReactProd : rehypeReactDev)
      .processSync(text);
  }
  return render(children).result;
}
