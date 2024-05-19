import { useTina } from "tinacms/dist/react";
import type { BlogQuery } from "@tina/__generated__/types";

export default function Markdown(props) {
  const { data }: { data: BlogQuery } = useTina(props);

  return <pre>{data?.blog?.body}</pre>;
}
