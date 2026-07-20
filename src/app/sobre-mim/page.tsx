// src/app/sobre-mim/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: "Sobre Mim | Tatiana Goes",
  description:
    "Conheça Tatiana Goes, Product Designer em São Paulo: trajetória, inspirações e abordagem de design centrado no usuário.",
};

const catImages = [
  { src: "/sobre-mim/gato0.jpg", alt: "Lola" },
  { src: "/sobre-mim/gato1.jpg", alt: "Tigre" },
  { src: "/sobre-mim/gato2.jpg", alt: "Romeu" },
  { src: "/sobre-mim/gato4.jpg", alt: "Little Boy" },
  { src: "/sobre-mim/gato5.jpg", alt: "Luna" },
  { src: "/sobre-mim/gato6.jpg", alt: "Keith" },
  { src: "/sobre-mim/gato7.jpg", alt: "Nina" },
  { src: "/sobre-mim/planta0.jpg", alt: "Hortensia" },
  { src: "/sobre-mim/planta1.jpg", alt: "Orquidea" },
  { src: "/sobre-mim/arte0.jpg", alt: "Tim Burton" },
];

export default function PaginaSobreMim() {
  return (
    <div>
      {/* Título "Quem sou eu" */}
      <section className="bg-white dark:bg-gray-900 pt-24 pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Quem sou eu
          </h1>
        </div>
      </section>

      {/* Seção de Conteúdo (Imagem + Texto) */}
      <section className="bg-white dark:bg-gray-900 pb-24 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
          {/* Coluna da Imagem */}
          <div className="md:w-3/5 flex justify-center">
            <div className="overflow-hidden rounded-lg shadow-xl">
              {" "}
              {/* Adiciona bordas arredondadas e sombra */}
              <Image
                src="/sobre-mim/foto-principal.avif"
                alt="Tatiana Goes - Designer"
                width={800}
                height={533}
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Coluna do Texto */}
          <div className="md:w-2/5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1b] dark:text-white mb-6 leading-snug">
              Criando experiências visuais que conectam pessoas, ideias e
              negócio.
            </h2>
            <p className="text-lg text-[#1b1b1b] dark:text-gray-300">
              Sou designer pleno com foco em criar soluções visuais que
              transmitam mensagens de forma clara e facilitadora. Valorizo a
              escuta atenta e a empatia como ferramentas essenciais para
              entender cada usuário e transformar suas necessidades. Meu
              trabalho une sensibilidade estética e estratégia para desenvolver
              interfaces e materiais que geram conexões reais e duradouras.
            </p>
          </div>
        </div>
      </section>

      {/*  Seção "Inspirações e interesses" */}
      <section className="bg-white dark:bg-gray-900 py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* - O Título da Seção */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#1b1b1b] dark:text-white leading-tight mb-12">
            Inspirações e interesses
          </h2>

          {/* Carrossel */}
          <div className="relative px-0 md:px-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full mb-4"
            >
              <CarouselContent>
                {catImages.map((img, index) => (
                  <CarouselItem key={index} className="basis-4/5 md:basis-1/3 lg:basis-1/4">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <div className="relative aspect-300/400">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Setas visíveis apenas no desktop */}
              <CarouselPrevious className="hidden md:flex -left-10" />
              <CarouselNext className="hidden md:flex -right-10" />
            </Carousel>
          </div>

          {/* Indicador de deslize — visível apenas no mobile */}
          <p className="mb-8 text-xs text-gray-400 dark:text-gray-500 md:hidden tracking-wide text-center">
            ← deslize para ver mais →
          </p>

          {/* Seção de Texto em Duas Colunas  */}
          <div className="flex flex-col md:flex-row gap-12 text-lg text-[#1b1b1b] dark:text-gray-300">
            {/* Coluna Esquerda */}
            <div className="md:w-1/2">
              <p>
                Além do design, encontro inspiração nas pessoas e elementos ao
                meu redor, especialmente na minha família e nos meus gatos.
                Tenho um olhar atento aos detalhes e grande interesse em
                observar como as pessoas interagem com produtos, buscando
                compreender a experiência real que vivenciam. Sou formada em
                Artes Visuais e, com a experiência como diretora de arte,
                desenvolvi um senso estético apurado aliado a uma abordagem
                sensível e empática.
              </p>
            </div>
            {/* Coluna Direita */}
            <div className="md:w-1/2">
              <p>
                No meu tempo livre, dedico-me a estudar design e a explorar
                diferentes formas de expressão artística. A música e outras
                manifestações culturais fazem parte do meu repertório criativo,
                ampliando minhas referências e fortalecendo minha capacidade de
                criar soluções relevantes e conectadas com as pessoas.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* [ LINHA FALTANTE ] - Fechamento do container */}
      </section>
    </div>
  );
}
