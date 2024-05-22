import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function Codeblock(props) {
  const className = "";
  const style = "";
  return (
    <pre
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
    >
      {props.value}
    </pre>
  );
}
