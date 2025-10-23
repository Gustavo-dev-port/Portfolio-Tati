import Link from "next/link";
import Image from "next/image";

import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-center bg-white-100 dark:bg-gray-900 py-32 px-4 rounded-b-lg shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl">
          {/* Título Principal */}
          <div className="shrink-0">
            <Image
              src="/profile.jpg"
              alt="Tatiana Goes - Designer de UI/UX"
              width={300}
              height={300}
              className="rounded-full shadow-lg object-cover w-72 h-72"
            />
          </div>
          <div className="text-center md:text-left grow">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
              Olá, eu sou a <span className="text-[#2a2a2a]">Tatiana Goes</span>
              .
            </h1>
            <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              <p>
                Product Designer atuando em São Paulo, criando interfaces
                intuitivas e acessíveis para entregar soluções que trazem
                impacto para o negócio.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Carousel />
    </main>
  );
}
