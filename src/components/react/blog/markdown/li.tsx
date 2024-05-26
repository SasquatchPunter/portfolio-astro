import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function Li(props) {
  const className = "[&>div]:inline";
  const style = "";
  return (
    <li
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
    >
      {props.children}
    </li>
  );
}
