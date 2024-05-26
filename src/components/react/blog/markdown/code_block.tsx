import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function PreTag(props) {
  const className = "rounded-xl my-4";
  const style = "";
  return (
    <pre
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
    >
      {props.children}
    </pre>
  );
}

function CodeTag(props) {
  const className = "";
  const style = "";
  return (
    <code
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
    >
      {props.children}
    </code>
  );
}

export default function Codeblock(props) {
  const className = "";
  const style = "";
  return (
    <SyntaxHighlighter
      children={props.value || ""}
      language={props.lang || "jsx"}
      style={atomOneDark}
      showLineNumbers
      PreTag={PreTag}
      CodeTag={CodeTag}
    />
  );
}
