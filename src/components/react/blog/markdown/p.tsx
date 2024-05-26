import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function P(props) {
  const className = "my-4";
  const style = "";
  return (
    <p
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </p>
  );
}
