import PostHeader from "./BlogPostHeader";
import components from "@components/react/blog/markdown";
import BlogPostTagList from "./BlogPostTagList";
import type { BlogQuery } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function BlogPost(props) {
  const { data } = useTina<BlogQuery>(props.post);
  return (
    <main>
      <BlogPostTagList tags={data.blog.tags} />
      <article>
        <PostHeader title={data.blog.title} />
        <TinaMarkdown components={components} content={data.blog.body} />
      </article>
    </main>
  );
}
