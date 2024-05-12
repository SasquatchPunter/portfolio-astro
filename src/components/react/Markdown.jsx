import ReactMarkdown from "react-markdown";
import { Paragraph, Image } from "./markdown/index.js";

export default function Markdown({ body }) {
  return (
    <ReactMarkdown components={{ p: Paragraph, img: Image }}>
      {body}
    </ReactMarkdown>
  );
}
