import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function Pre(props) {
  const className = "p-2 rounded-xl";
  const style = "";
  return (
    <pre
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </pre>
  );
}
