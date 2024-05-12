export default function Image({ children, node }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}${node.properties.src || ""}`}
      title={node.properties.title || "Image"}
      alt={node.properties.alt || "Image"}
    >
      {children}
    </img>
  );
}
