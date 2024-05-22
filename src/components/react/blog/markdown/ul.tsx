import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function Ul(props) {
  const className = "";
  const style = "";
  return (
    <ul
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
    >
      {props.children}
    </ul>
  );
}
