import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function Ol(props) {
  const className = "list-decimal my-4 list-inside";
  const style = "";
  return (
    <ol
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
    >
      {props.children}
    </ol>
  );
}
