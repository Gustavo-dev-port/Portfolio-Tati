// src/components/ProjectNavigation.tsx
import Link from "next/link";
import { projectData } from "../lib/projects-data"; // Importa nossa lista
import { ArrowRight } from "lucide-react"; // Um ícone legal
// O componente vai receber o link do projeto ATUAL como "prop"
type ProjectNavigationProps = {
  currentProjectHref: string; // Ex: "/auto-servico"
};

export default function ProjectNavigation({
  currentProjectHref,
}: ProjectNavigationProps) {
  // Aqui, filtramos a lista para mostrar apenas os OUTROS projetos
  const otherProjects = projectData.filter(
    (project: { href: string }) => project.href !== currentProjectHref
  );

  // Se não houver outros projetos (ou se for o último), não mostra nada
  if (otherProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-[#1b1b1b] dark:text-white mb-12">
          Veja Outros Projetos
        </h2>

        {/* Usamos grid para 2 colunas, ou quantas couberem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <Link
              href={project.href}
              key={project.href}
              className="group block bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Mostra o subtítulo, ex: "Design System" */}
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {project.subtitle}
              </p>

              {/* Título do Projeto */}
              <h3 className="text-3xl font-bold text-[#1b1b1b] dark:text-white mt-2 mb-4 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              {/* Link "Ver projeto" com seta */}
              <span className="font-semibold text-blue-600 flex items-center gap-2">
                Ver projeto
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
