"use client";

import ProjectHero from "@/components/ProjectHero";
import ProjectCover from "@/components/ProjectCover";
import ProjectNavigation from "@/components/ProjectNavigation";
import { ProjectImageDialog } from "@/components/ProjectImageDialog";
import { useImageModal } from "@/hooks/useImageModal";

import { ClickableImage } from "@/components/ClickableImage";

export default function FreteContent() {
  const { modalImage, openModal, closeModal } = useImageModal();

  return (
    <article className="bg-white dark:bg-gray-800">
      {/* Seção Hero do Projeto (Título e Subtítulo) */}
      <ProjectHero
        title="Transformando a experiência no carrinho de compras."
        subtitle="Como o design pode redefinir a satisfação do cliente."
      />

      {/* Imagem de Capa do Projeto */}
      <ProjectCover
        src="/frete/capa.avif"
        alt="Capa do Projeto Frete no Carrinho"
        objectPosition="object-[50%_62%]"
      />

      {/* Seção de Contexto */}
      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-2xl dark:prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-[#1b1b1b] dark:text-white mb-6">
              Contexto
            </h2>
            <p className="text-xl">
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
          <div className="mt-8 space-y-8">
            <ClickableImage
              src="/frete/contexto.avif"
              alt="Contexto do case Frete no Carrinho"
              onClick={() => openModal("/frete/contexto.avif", "Contexto do case Frete no Carrinho")}
            />
          </div>
        </div>
      </section>

      {/*Seção Desk Research */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-2xl dark:prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-[#1b1b1b] dark:text-white mb-6">
              Solução
            </h2>
            <p className="text-xl">
              A implementação de uma nova feature nesta parte da jornada exige
              uma visão profunda sobre o impacto desta etapa no fluxo de decisão
              do usuário, para isso, mapeamos sua jornada de experiência e
              confirmamos que havia potencial de redução da taxa de abandono de
              carrinho, ao entregar visibilidade e mitigar a frustração do
              usuário neste momento crítico de sua jornada.
            </p>

            <ClickableImage
              src="/frete/solucao.avif"
              alt="Solução, 1 de 8, do case Frete no Carrinho"
              onClick={() => openModal("/frete/solucao.avif", "Solução, 1 de 8, do case Frete no Carrinho")}
            />

            <p className="text-xl">
              O mapeamento também ajudou a identificar os pontos de contato onde
              a feature agregaria mais valor.
            </p>
            <p className="text-xl">
              Optamos por realizar um <b>teste de usabilidade</b> com os
              principais objetivos:
            </p>
            <ul className="list-disc pl-5 text-xl mt-2">
              <li>
                Avaliar se os usuários conseguiam calcular o frete com
                facilidade
              </li>
              <li>Testar a hierarquia de informações</li>
              <li>Compreender a relevância da feature no processo de compra</li>
            </ul>
            <p className="text-xl">Durante o teste:</p>
            <ul className="list-disc pl-5 text-xl mt-2">
              <li>
                Medimos a encontrabilidade da funcionalidade ao solicitar uma
                tarefa em que o usuário precisava interagir com o cálculo de
                frete, testando a hierarquia de informações.
              </li>
              <li>
                Apresentamos diferentes versões e pedimos que os usuários
                indicassem qual delas transmitia melhor a percepção de clareza.
              </li>
            </ul>
            <p className="text-xl">
              Prototipamos as soluções em versões mobile e desktop para avaliar
              a consistência da experiência em diferentes contextos de uso.
            </p>
            <ClickableImage
              src="/frete/solucao2.avif"
              alt="Solução, 2 de 8, do case Frete no Carrinho"
              onClick={() => openModal("/frete/solucao2.avif", "Solução, 2 de 8, do case Frete no Carrinho")}
            />
            <p className="text-xl">
              Confirmamos nossa hipótese de que o usuário acredita ser
              importante saber o quanto antes o valor do frete antes de
              finalizar sua compra.
            </p>
            <ClickableImage
              src="/frete/solucao3.avif"
              alt="Solução, 3 de 8, do case Frete no Carrinho"
              onClick={() => openModal("/frete/solucao3.avif", "Solução, 3 de 8, do case Frete no Carrinho")}
            />
            <p className="text-xl">
              Para medir a encontrabilidade para calcular o frete, solicitamos
              uma tarefa para que o usuário interagisse com o cálculo de frete
              com intuito de testar a hierarquia de informações. Os resultados
              foram próximos entre si, reforçando que a encontrabilidade estava
              adequada.
            </p>
            <ClickableImage
              src="/frete/solucao4.avif"
              alt="Solução, 4 de 8, do case Frete no Carrinho"
              onClick={() => openModal("/frete/solucao4.avif", "Solução, 4 de 8, do case Frete no Carrinho")}
            />
            <ClickableImage
              src="/frete/solucao5.avif"
              alt="Solução, 5 de 8, do case Frete no Carrinho"
              onClick={() => openModal("/frete/solucao5.avif", "Solução, 5 de 8, do case Frete no Carrinho")}
            />
            <p className="text-xl">
              Com o intuito de entender qual das opções o usuário tem a percepção
              mais fácil do frete, perguntamos qual das versões seria ideal.
            </p>
            <ClickableImage
              src="/frete/solucao6.avif"
              alt="Solução, 6 de 8, do case Frete no Carrinho"
              onClick={() => openModal("/frete/solucao6.avif", "Solução, 6 de 8, do case Frete no Carrinho")}
            />

            <ClickableImage
              src="/frete/solucao7.avif"
              alt="Solução, 7 de 8, do case Frete no Carrinho"
              onClick={() => openModal("/frete/solucao7.avif", "Solução, 7 de 8, do case Frete no Carrinho")}
            />

            <ClickableImage
              src="/frete/solucao8.avif"
              alt="Solução, 8 de 8, do case Frete no Carrinho"
              onClick={() => openModal("/frete/solucao8.avif", "Solução, 8 de 8, do case Frete no Carrinho")}
            />
            <ClickableImage
              src="/frete/prototipo1.avif"
              alt="Protótipo, 1 de 3, do case Frete no Carrinho"
              onClick={() => openModal("/frete/prototipo1.avif", "Protótipo, 1 de 3, do case Frete no Carrinho")}
            />
            <ClickableImage
              src="/frete/prototipo2.avif"
              alt="Protótipo, 2 de 3, do case Frete no Carrinho"
              onClick={() => openModal("/frete/prototipo2.avif", "Protótipo, 2 de 3, do case Frete no Carrinho")}
            />
            <ClickableImage
              src="/frete/prototipo3.avif"
              alt="Protótipo, 3 de 3, do case Frete no Carrinho"
              onClick={() => openModal("/frete/prototipo3.avif", "Protótipo, 3 de 3, do case Frete no Carrinho")}
            />
            <p className="text-xl">
              É possível visualizar os protótipos{" "}
              <a href="https://www.figma.com/proto/pcjCM6LHdXXVxEz00AnUWy/frete/no-carrinho?kind=proto&node-id=1-4438&page-id=0%3A1&scaling=scale-down&t=ZnMhkiKndUvFeVPF-1&type=design">
                <u>mobile</u>
              </a>{" "}
              e{" "}
              <a href="https://www.figma.com/proto/pcjCM6LHdXXVxEz00AnUWy/frete/no-carrinho?kind=proto&node-id=1-26269&page-id=1%3A13535&scaling=min-zoom&t=WExuVSkKm4THqgHe-1&type=design">
                <u>desktop</u>
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <section className="py-4 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-2xl dark:prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-[#1b1b1b] dark:text-white mb-6">
              Resultados
            </h2>
            <p className="text-xl">
              O principal resultado foi a validação da relevância da
              funcionalidade: o cálculo de frete no carrinho trouxe mais
              <b>transparência</b>, <b>confiança e agilidade</b> à jornada.
            </p>
            <p className="text-xl">Foi possível observar:</p>
            <ul className="list-disc pl-5 text-xl mt-2">
              <li>
                <b>Menor abandono de carrinho</b>: a clareza sobre os custos
                antes do checkout reduziu desistências.
              </li>
              <li>
                <b>Aumento da taxa de retenção</b>: a transparência reforçou a
                confiança e incentivou retornos
              </li>
              <li>
                <b>
                  Maior tempo gasto na página do carrinho (qualitativamente
                  positivo)
                </b>
                : os usuários passaram mais tempo interagindo, demonstrando
                maior atenção e engajamento com a jornada
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ProjectNavigation currentProjectHref="/frete" />
      <ProjectImageDialog modalImage={modalImage} onClose={closeModal} />
    </article>
  );
}
