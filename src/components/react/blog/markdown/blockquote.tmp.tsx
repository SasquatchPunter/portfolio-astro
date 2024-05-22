import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function Blockquote(props) {
  const className = "";
  const style = "";
  return (
    <blockquote
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
    >
      <i>{props.children}</i>
    </blockquote>
  );
}
