import ReactMarkdown, { type Options } from "react-markdown";
import { P, Img, H1, H2, H3, H4, H5, H6, Pre, Code } from "./markdown";

const options: Options = {
  components: {
    p: P,
    img: Img,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    pre: Pre,
    code: Code,
  },
};

interface Props {
  body: string;
}

export default function Markdown({ body }: Props) {
  return <ReactMarkdown {...options}>{body}</ReactMarkdown>;
}
