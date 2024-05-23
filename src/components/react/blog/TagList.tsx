import type { BlogQuery } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

export default function TagList(props) {
  const { data } = useTina<BlogQuery>(props.post);

  return (
    <ul className="flex flex-row gap-1">
      {data.blog.tags?.map((tag) => (
        <li
          key={tag}
          className="text-blue-800 bg-blue-100 w-max px-2 rounded-2xl border-2 border-blue-300 before:content-['#']"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
