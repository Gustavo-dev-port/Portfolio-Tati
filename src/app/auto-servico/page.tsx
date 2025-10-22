// src/app/projetos/page.tsx

import Image from "next/image";

export default function PaginaProjetos() {
  const projectName = "Transformando a experiência no carrinho de compras."; // Vamos definir o nome manualmente por enquanto
  const projectSubtitle =
    "Como o design pode redefinir a satisfação do cliente."; // Definindo a legenda manualmente

  return (
    <article>
      <section className="bg-gray-100 dark:bg-gray-900 py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            {projectName}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {projectSubtitle}
          </p>
        </div>
      </section>

      {/* Imagem Capa do Projeto */}
      <section className="container max-auto max-w-6xl -mt-16 px-4">
        <div className="overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/autoservice.avif"
            alt="Imagem do Projeto de Auto Serviço"
            width={800}
            height={475}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Conteúdo do Projeto */}
      <section className="py-24 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coluna "Contexto" */}
          <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Contexto
            </h2>
            <p>
              Entre a descoberta de um produto desejado e a finalização da
              compra, existe um ponto crítico que pode determinar o sucesso ou o
              abandono: o cálculo do frete no carrinho de compras. Longe de ser
              apenas um detalhe logístico, o frete representa um dos maiores
              gargalos na experiência do usuário, envolvendo informações
              complexas, custos inesperados e prazos incertos que muitas vezes
              levam à desistência. Este projeto buscou não apenas otimizar o
              processo de cálculo e exibição do frete, mas também transformá-lo
              em um pilar de confiança e transparência, redefinindo a satisfação
              do cliente e impulsionando a conversão.
            </p>
          </div>
          <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Como foi feito
            </h2>
            <p>
              A implementação de uma nova feature nesta parte da jornada ,exige
              uma visão profunda sobre o impacto desta etapa no fluxo de decisão
              do usuário, para isso, mapeamos sua jornada de experiência e
              confirmamos que havia potencial de redução da taxa de abandono de
              carrinho, ao entregar visibilidade e mitigar a frustração do
              usuário neste momento crítico de sua jornada.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
