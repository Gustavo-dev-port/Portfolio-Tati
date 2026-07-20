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
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Meus Projetos
        </h2>

        {/* px-10 no wrapper cria espaço lateral para os botões no desktop */}
        <div className="relative px-0 md:px-10">
          <Carousel className="w-full" opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {projectData.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="basis-4/5 md:basis-3/4 lg:basis-2/3"
                >
                  <div className="p-1">
                    <Link href={project.href} className="group">
                      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform group-hover:scale-105 group-hover:shadow-xl">
                        <div className="aspect-3/2 overflow-hidden">
                          <Image
                            src={project.src}
                            alt={project.alt}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        <div className="p-4 text-left">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Setas visíveis apenas no desktop — no mobile o usuário desliza */}
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
