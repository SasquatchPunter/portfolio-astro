interface Props {
  title: string;
}

export default function ({ title }: Props) {
  return (
    <header>
      <h1 className="text-4xl">{title}</h1>
    </header>
  );
}
