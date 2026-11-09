// Cabeçalho (título e subtítulo) compartilhado pelas páginas de projeto.
type ProjectHeroProps = {
  title: string;
  subtitle: string;
};

export default function ProjectHero({ title, subtitle }: ProjectHeroProps) {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 px-4">
      <div className="container mx-auto max-w-4xl text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1b1b1b] dark:text-white mb-4">
          {title}
        </h1>
        <p className="text-2xl md:text-2xl text-gray-700 dark:text-gray-300">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
