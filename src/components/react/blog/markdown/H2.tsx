export default function H2(props) {
  return (
    <h2
      className={props.className}
      style={props.style}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </h2>
  );
}
