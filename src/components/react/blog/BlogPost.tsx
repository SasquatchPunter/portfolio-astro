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
      <article>
        <PostHeader title={data.blog.title} />
        <BlogPostTagList tags={data.blog.tags} />
        <div className="m-4 md:m-20 lg:mx-80">
          <TinaMarkdown components={components} content={data.blog.body} />
        </div>
      </article>
    </main>
  );
}
