import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function Code(props) {
  const className = "";
  const style = "";
  return (
    <code
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </code>
  );
}
