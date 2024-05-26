import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function H4(props) {
  const className = "text-3xl my-4";
  const style = "";
  return (
    <h4
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </h4>
  );
}
