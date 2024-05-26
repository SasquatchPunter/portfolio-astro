import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function H5(props) {
  const className = "text-2xl my-4";
  const style = "";
  return (
    <h5
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </h5>
  );
}
