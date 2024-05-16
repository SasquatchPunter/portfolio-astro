import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function Blockquote(props) {
  const className = "border-l-2 p-2";
  const style = "";
  return (
    <blockquote
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
    >
      {props.children}
    </blockquote>
  );
}
