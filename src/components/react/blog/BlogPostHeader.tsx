export default function PostHeader({ title, featured_image }) {
  return (
    <header>
      <h1 className="text-2xl">{title}</h1>
      {featured_image && (
        <img src={`${import.meta.env.BASE_URL}${featured_image}`} />
      )}
    </header>
  );
}