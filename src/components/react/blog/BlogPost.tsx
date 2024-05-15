import BlogPostHeader from "./BlogPostHeader";
import Renderer from "./Renderer";
import type { CollectionEntry } from "astro:content";

interface Props {
  entry: CollectionEntry<"blog">;
}

export default function BlogPost({ entry }: Props) {
  const { body } = entry;
  const { title, featured_image } = entry.data;
  return (
    <article>
      <BlogPostHeader title={title} featured_image={featured_image} />
      <Renderer>{body}</Renderer>
    </article>
  );
}
