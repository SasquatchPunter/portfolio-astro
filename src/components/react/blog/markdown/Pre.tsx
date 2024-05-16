export default function Pre(props) {
  const className = "p-2 rounded-xl";
  return (
    <pre
      className={[props.className, className].join(" ")}
      style={props.style}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </pre>
  );
}
