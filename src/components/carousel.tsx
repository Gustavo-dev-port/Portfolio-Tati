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
    <section className="w-full bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Meus Projetos
        </h2>

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
                          width={600} // Largura original
                          height={400} // Altura original
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* - Seção de Texto (Título e Subtítulo) */}
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
          <CarouselPrevious className="ml-8" />
          <CarouselNext className="mr-8" />
        </Carousel>
      </div>
    </section>
  );
}
