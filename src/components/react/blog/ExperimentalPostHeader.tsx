import type { BlogQuery } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

export default function ExperimentalPostHeader(props) {
  const { data } = useTina<BlogQuery>(props.post);
  return (
    <header className="bg-black text-white">
      <h1>{data.blog.title}</h1>
    </header>
  );
}
