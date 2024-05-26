import * as classes from "@utils/components/classes";
import * as styles from "@utils/components/styles";

export default function Blockquote(props) {
  const className =
    "mx-4 px-4 py-2 border-l-2 border-gray-900 dark:border-gray-200 bg-gradient-to-l from-transparent to-gray-200 dark:to-gray-800";
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
