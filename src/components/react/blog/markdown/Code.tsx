export default function Code(props) {
  return (
    <code
      className={props.className}
      style={props.style}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </code>
  );
}
