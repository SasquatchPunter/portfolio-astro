export default function Image(props) {
  return (
    <img
      className={props.className}
      style={props.style}
      src={`${import.meta.env.BASE_URL}${props.src}`}
      title={props.title}
      alt={props.alt}
    />
  );
}
