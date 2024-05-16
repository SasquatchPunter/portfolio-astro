export default function H5(props) {
  return (
    <h5
      className={props.className}
      style={props.style}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </h5>
  );
}
