export default function H1(props) {
  return (
    <h1
      className={props.className}
      style={props.style}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </h1>
  );
}
