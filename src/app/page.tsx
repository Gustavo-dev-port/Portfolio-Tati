// src/app/page.tsx (ou Home.tsx)
import Image from "next/image";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <main>
      {/* Correção: bg-white-100 não existe no Tailwind padrão. Alterado para bg-gray-50 */}
      <section className="flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-32 px-4 rounded-b-lg shadow-md transition-colors duration-300">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl">
          {/* Imagem de Perfil */}
          <div className="shrink-0">
            <Image
              src="/profile.jpg"
              alt="Tatiana Goes - Designer de UI/UX"
              width={300}
              height={300}
              priority
              // Adicionado dark:opacity-90 e uma borda sutil no modo escuro para suavizar o brilho da foto
              className="rounded-full shadow-lg object-cover w-72 h-72 dark:opacity-90 border border-transparent dark:border-gray-700"
            />
          </div>

          {/* Textos */}
          <div className="text-center md:text-left grow">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
              Olá, eu sou a{" "}
              <span className="text-gray-900 dark:text-gray-100 transition-colors duration-300">
                Tatiana Goes
              </span>
              .
            </h1>
            <div className="text-lg md:text-xl text-[#1b1b1b] dark:text-gray-300 mb-8">
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
