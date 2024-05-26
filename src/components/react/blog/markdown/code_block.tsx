import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

function PreTag(props) {
  const className = "rounded-xl my-4 p-4 overflow-auto";
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
  const className = "hljs-codeblock dark:hljs-codeblock-dark";
  const style = "";
  return (
    <div className={classes.join(className)} style={styles.join(style)}>
      <SyntaxHighlighter
        children={props.value || ""}
        language={props.lang || "jsx"}
        // style={atelierEstuaryDark} // Using custom tailwind plugin to port in hljs classes -- TW's darkmode can be leveraged
        showLineNumbers
        useInlineStyles={false}
        PreTag={PreTag}
        CodeTag={CodeTag}
      />
    </div>
  );
}
