export default function H3(props) {
  return (
    <h3
      className={props.className}
      style={props.style}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </h3>
  );
}
