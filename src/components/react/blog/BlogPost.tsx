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
    <article className="lg:w-3/4 md:w-4/5 m-auto">
      <BlogPostHeader title={title} featured_image={featured_image} />
      <Renderer>{body}</Renderer>
    </article>
  );
}
