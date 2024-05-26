import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

function PreTag(props) {
  const className = "rounded-b-xl mb-4 p-4 overflow-auto";
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

function CopyButton(props) {
  function copy(text) {
    navigator.clipboard.writeText(text);
  }
  return (
    <button className="h-full mx-4" onClick={() => copy(props.text)}>
      Copy
    </button>
  );
}

function TopBar(props) {
  return (
    <div className="h-8 bg-gray-900 rounded-t-xl flex flex-row justify-between">
      <div className="h-full mx-4 opacity-50">{props.lang}</div>
      <CopyButton text={props.value || ""} />
    </div>
  );
}

export default function Codeblock(props) {
  const className =
    "hljs-codeblock dark:hljs-codeblock-dark relative text-white";
  const style = "";
  return (
    <div className={classes.join(className)} style={styles.join(style)}>
      <TopBar {...props} />
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
