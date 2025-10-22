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

// [MUDANÇA 1] - Adicionamos title, subtitle e href (o link) para cada projeto
const projectData = [
  {
    src: "/autoservice.avif",
    alt: "Auto Serviço",
    title: "Nome do Projeto 1",
    subtitle: "UI/UX Design",
    href: "/auto-servico",
  },
  {
    src: "/frete.avif",
    alt: "Descrição do Projeto 2",
    title: "Nome do Projeto 2",
    subtitle: "Branding",
    href: "/frete",
  },
  {
    src: "/workngo.avif",
    alt: "Descrição do Projeto 3",
    title: "Nome do Projeto 3",
    subtitle: "Web Design",
    href: "/workn-go",
  },
];

export default function ProjectCarousel() {
  return (
    <section className="w-full bg-white dark:bg-gray-800 py-16">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Meus Projetos
        </h2>

        <Carousel className="w-full" opts={{ align: "center", loop: true }}>
          <CarouselContent>
            {/* [MUDANÇA 2] - Atualizamos o .map() para usar os novos dados */}
            {projectData.map((project, index) => (
              <CarouselItem
                key={index}
                className="basis-4/5 md:basis-3/4 lg:basis-2/3"
              >
                <div className="p-1">
                  {/* [MUDANÇA 3] - Adicionamos o Link envolvendo todo o card */}
                  <Link href={project.href} className="group">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform group-hover:scale-105 group-hover:shadow-xl">
                      {/* [MUDANÇA 4] - Container da Imagem com tamanho padronizado */}
                      {/* 'aspect-[3/2]' força uma proporção de 3:2 (ex: 600x400)
                        'h-64' força uma altura fixa. 
                        Escolha o que for melhor para seu design. Vamos usar aspect-[3/2].
                      */}
                      <div className="aspect-3/2 overflow-hidden">
                        <Image
                          src={project.src}
                          alt={project.alt}
                          width={600} // Largura original
                          height={400} // Altura original
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* [MUDANÇA 5] - Seção de Texto (Título e Subtítulo) */}
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
