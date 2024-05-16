export default function H1(props) {
  const className = "text-5xl";
  return (
    <h1
      className={[props.className, className].join(" ").trim()}
      style={props.style}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </h1>
  );
}
