import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function H2(props) {
  const className = "text-5xl";
  const style = "";
  return (
    <h2
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </h2>
  );
}