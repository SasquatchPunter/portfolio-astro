export default function Image({ src, alt, title }) {
  return (
    <img src={`${import.meta.env.BASE_URL}${src}`} title={title} alt={alt} />
  );
}
