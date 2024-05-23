export default function BlogPostTagList(props) {
  return (
    <ul className="flex flex-row gap-1">
      {props.tags?.map((tag) => (
        <li
          key={tag}
          className="text-blue-800 bg-blue-100 w-max px-2 rounded-2xl border-2 border-blue-300 before:content-['#']"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
