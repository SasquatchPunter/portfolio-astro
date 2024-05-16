import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function H6(props) {
  const className = "text-xl";
  const style = "";
  return (
    <h6
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </h6>
  );
}
