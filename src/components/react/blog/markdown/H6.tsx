export default function H6(props) {
  return (
    <h6
      className={props.className}
      style={props.style}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </h6>
  );
}
