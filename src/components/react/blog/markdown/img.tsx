import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function Image(props) {
  const className = "rounded-xl";
  const style = "";
  // props.props.caption is supported by the default tina ui component
  // this could be added as a visible caption in the future
  return (
    <img
      className={classes.join(props.className, className)}
      style={styles.join(props.style, style)}
      src={`${import.meta.env.BASE_URL}${props.url}`}
      alt={props.props?.alt}
    />
  );
}
