import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function Image(props) {
  const className = "";
  const style = "";
  return (
    <img
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
      src={props.src}
      title={props.title}
      alt={props.alt}
    />
  );
}
