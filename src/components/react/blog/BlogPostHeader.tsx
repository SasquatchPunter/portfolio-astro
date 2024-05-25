interface Props {
  title: string;
}

export default function ({ title }: Props) {
  return (
    <header className="bg-zinc-300 dark:bg-zinc-700 py-10 px-10 md:py-16 ">
      <h1 className="text-4xl">{title}</h1>
    </header>
  );
}
