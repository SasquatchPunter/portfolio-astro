export default function H4(props) {
  return (
    <h4
      className={props.className}
      style={props.style}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </h4>
  );
}
