export default function P(props) {
  return (
    <p
      className={props.className}
      style={props.style}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </p>
  );
}
