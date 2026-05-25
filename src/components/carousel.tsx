// src/components/ProjectCarousel.tsx
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { projectData } from "@/lib/projects-data";

export default function ProjectCarousel() {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-800 py-16 overflow-x-hidden">
      <div className="container mx-auto max-w-4xl text-center px-4">
        {/* Substituíção do text-white por text-gray-100 para não usar branco puro */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Meus Projetos
        </h2>

        <div className="relative px-0 md:px-10">
          <Carousel className="w-full" opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {projectData.map((project, index) => (
                <CarouselItem
                  key={index}
                  // Adicionado h-auto para que os itens assumam a mesma altura no flex
                  className="basis-4/5 md:basis-3/4 lg:basis-2/3 h-auto"
                >
                  <div className="p-1 h-full">
                    <Link
                      href={project.href}
                      className="group block h-full"
                      aria-label={`Ver detalhes do projeto: ${project.title}`}
                    >
                      {/* Flexbox adicionado (flex flex-col h-full) para padronizar os cartões */}
                      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform group-hover:scale-105 group-hover:shadow-xl border border-transparent dark:border-gray-700 flex flex-col h-full">
                        <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800 shrink-0">
                          <Image
                            src={project.src}
                            alt={
                              project.alt || `Capa do projeto ${project.title}`
                            }
                            width={600}
                            height={400}
                            className="object-cover w-full h-full transition-opacity dark:opacity-90 group-hover:dark:opacity-100"
                          />
                        </div>

                        {/* flex-grow empurra o conteúdo preenchendo o espaço vazio, mantendo alturas iguais */}
                        <div className="p-4 text-left grow flex flex-col justify-start">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                            {project.title}
                          </h3>
                          {/* Substituição do dark:text-gray-400 por dark:text-gray-300 para maior clareza, mantendo text-sm (14px) */}
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-10" />
            <CarouselNext className="hidden md:flex -right-10" />
          </Carousel>
        </div>

        {/* Alterado de text-xs (12px) para text-sm (14px) e de dark:text-gray-400 para dark:text-gray-300 para ficar mais claro */}
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-300 md:hidden tracking-wide animate-pulse">
          ← deslize para ver mais →
        </p>
      </div>
    </section>
  );
}
