interface Props {
  title: string;
}

export default function ({ title }: Props) {
  return (
    <header className="bg-black text-white h-32">
      <h1 className="text-4xl">{title}</h1>
    </header>
  );
}
