"use client";

import Image from "next/image";
import ProjectNavigation from "@/components/ProjectNavigation";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { ClickableImage } from "@/components/ClickableImage";

export default function PaginaWorknGo() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <article className="bg-white dark:bg-gray-800">
      {/* Seção Hero do Projeto (Título e Subtítulo) */}
      <section className="bg-white dark:bg-gray-900 py-24 px-4">
        <div className="container mx-auto max-w-4xl text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1b1b1b] dark:text-white mb-4">
            Case Work'n Go
          </h1>
          <p className="text-2xl md:text-2xl text-gray-700 dark:text-gray-300">
            UI/UX de plataforma para nômades digitais, com navegação simples
            para facilitar a busca por acomodações, trabalho e eventos em
            qualquer lugar do mundo.
          </p>
        </div>
      </section>

      {/* Imagem de Capa do Projeto */}
      <section className="container mx-auto max-w-6xl px-4 -mt-8">
        <div className="overflow-hidden rounded-lg shadow-2xl aspect-21/9">
          <Image
            src="/workngo.avif"
            alt="Capa do Projeto Work'n Go"
            width={1200}
            height={675} // Proporção 21:9
            className="w-full h-full object-cover object-[50%_62%]"
          />
        </div>
      </section>

      {/* Seção de Contexto */}
      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-2xl dark:prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-[#1b1b1b] dark:text-white mb-6">
              Contexto
            </h2>
            <p className="text-xl">
              Nômades digitais enfrentam dificuldades para encontrar, de forma
              rápida e confiável, acomodações, espaços de trabalho e eventos
              relevantes nos destinos onde estão ou planejam visitar, além do
              fato de muitas vezes não conhecerem pessoas e a experência se
              tornar um tanto soitária podendo gerar vulnerabilidade emocional.
              As plataformas existentes geralmente fragmentam essas informações
              ou apresentam experiências pouco adaptadas à mobilidade constante,
              resultando em perda de tempo e oportunidades. A ascensão do
              nomadismo é uma realidade que o mundo digital nos proporcionou mas
              como manter o futuro do trabalho, com liberdade geográfica,
              flexibilidade e foco no bem-estar?
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-2xl dark:prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-[#1b1b1b] dark:text-white mb-6">
              Um pouco de dados
            </h2>
            <ul className="list-disc pl-5 text-xl mt-2">
              <li>
                Estima-se que atualmente existam entre <b> 40 e 60 milhões </b>{" "}
                de nômades digitais no mundo.
              </li>
              <li>
                A média de idade dos nômades digitais em 2025 é de{" "}
                <b>36 anos</b>.
              </li>
              <li>
                A grande maioria — <b>78%</b> — afirma depender fortemente de
                conexões digitais para trabalhar remotamente.
              </li>
              <li>
                Total mundial de nômades: <b> 40 a 60 milhões </b> (2024) → +{" "}
                <b>60 milhões</b> até 2030{" "}
              </li>
              <li>
                <b>40%</b> dos nômades digitais relatam sentir solidão com
                frequência ou constantemente. Além disso, <b>45%</b> afirmam
                sofrer isolamento social devido à rotina de mudanças constantes,
                dificultando a criação de relações profundas.
              </li>
              <li>
                {" "}
                <b>Até 45%</b> dos trabalhadores remotos enfrentam isolamento e
                falta de conexão social como principais desafios
              </li>
            </ul>
            <p className="text-xl mt-4">
              Esses números e relatos são essenciais para fundamentar decisões
              de design centrado no usuário com visibilidade de negócio. Eles
              sugerem:
            </p>
            <ul className="list-disc pl-5 text-xl mt-4">
              <li>
                Priorizar <b>funcionalidades sociais</b>: comunidades, eventos
                locais, coliving.
              </li>
              <li>
                Criar <b>experiências que apoiem relações duradouras</b>, mesmo
                com mobilidade.
              </li>
              <li>
                <b>Humanizar o layout</b> com empatia, destacando conexões e
                apoio emocional.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção Solução do Projeto */}

      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-2xl dark:prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-[#1b1b1b] dark:text-white mb-6">
              Solução do Projeto
            </h2>
            <p className="text-xl">
              A <b>Matriz CSD</b> foi utilizada para organizar o conhecimento
              sobre os nômades digitais, separando o que já era conhecido (
              <b>certezas</b>), o que precisava de validação (<b>suposições</b>)
              e os pontos a investigar (<b>dúvidas</b>). Essa etapa ajudou a
              alinhar equipe e direcionar a pesquisa, reduzindo riscos e
              garantindo que as soluções propostas fossem relevantes e baseadas
              em evidências reais dos usuários.
            </p>
            <ClickableImage
              src="/workngo-solucao1.avif"
              alt="Solucao"
              onClick={() => setModalImage("/workngo-solucao1.avif")}
            />
            <p className="text-xl mt-4">
              Foram observados os seguintes pontos:
            </p>
            <ul className="list-disc pl-5 text-xl mt-6">
              <li>
                Nômades digitais, buscam muitos <b>artigos</b>, <b>blogs</b>,{" "}
                <b>conteúdos</b> e <b>dicas</b>.
              </li>
              <li>
                As pessoas da <b>comunidade</b> se ajudam
              </li>
              <li>
                Nômades digitais tem problemas com{" "}
                <b>locais adequados para trabalhar</b>.
              </li>
              <li>
                Nômades digitais tem muitos <b>problemas com internet</b>.
              </li>
              <li>
                Vários aplicativos são utlizados como aliados para facilitar a
                vida como Airbnb, Hostelworld, google tradutor, etc
              </li>
              <li>
                As pessoas buscam cidades mais eficientes (com opções de lugares
                e comodidades)
              </li>
              <li>
                O <b>fuso horário</b> é um problema para os profissionais
              </li>
              <li>
                As pessoas se sentem <b>solitárias</b>, pois não tem amigos e
                família perto.
              </li>
            </ul>
            <p className="text-xl">
              A partir da matriz e explorando grupos de whatsapp foi hora de
              conhecer melhor nossos usuários, criando protopersonas para
              entender melhor uma construção da marca e sua narrativa contextual
              para protagonizar o uso do produto:
            </p>
            <ClickableImage
              src="/workngo-solucao2.avif"
              alt="Solucao"
              onClick={() => setModalImage("/workngo-solucao2.avif")}
            />
            <p className="text-xl">
              Foi desenvolvido um mapa de empatia para aprofundar o conhecimento
              do perfil de usuário ideal
            </p>
            <ClickableImage
              src="/workngo-solucao3.webp"
              alt="Solucao"
              onClick={() => setModalImage("/workngo-solucao3.webp")}
            />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-2xl dark:prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-[#1b1b1b] dark:text-white mb-6">
              Site Map
            </h2>
            <p className="text-xl">
              Foi criado um sitemap fundamentado nas informações levantadas para
              desenvolver a solução em formato de aplicativo. A solução
              encontrada, pretende amenizar as dores apresentadas utilizando as
              seguintes funcionalidades:
            </p>
            <ul className="list-disc pl-5 text-xl mt-6">
              <li>
                Compartilhamento de dicas, busca de oportunidades, possibilidade
                de conexões com outros viajantes e publicações de novas vagas de
                forma descomplicada e rápida.
              </li>
              <li>
                <b>Time zones overview</b>: selecionador de destinos frequentes
                e idioma local. Facilidade em visualizar diversos fusos horários
                ao mesmo tempo, buscar as melhores cidades, baseado em
                avaliações de infrainstrutura, custo de vida, clima, etc...
              </li>
              <li>
                Usuários podem ter em seu perfil fotos e vídeos de lugares que
                visitaram, afim de compartilhar experiencias específicas de
                forma menos informal.
              </li>
              <li>
                <b>Centro de ajuda offline com FAQ e artigos lidos offline</b>.
              </li>
              <li>
                <b>Perfis de viagem e comunidade</b> — conexão, recomendação de
                locais e espaços inspiradores.
              </li>
            </ul>
            <ClickableImage
              src="/workngo-site-map1.avif"
              alt="Site Map 1"
              onClick={() => setModalImage("/workngo-site-map1.avif")}
            />
            <p className="text-xl">
              Foi criado o wireframe para estudar a melhor usabilidade e idear o
              fluxo de navegação.
            </p>
            <ClickableImage
              src="/workngo-site-map2.avif"
              alt="Site Map 2"
              onClick={() => setModalImage("/workngo-site-map2.avif")}
            />
            <ClickableImage
              src="/workngo-site-map3.avif"
              alt="Site Map 3"
              onClick={() => setModalImage("/workngo-site-map3.avif")}
            />
            <ClickableImage
              src="/workngo-site-map4.avif"
              alt="Site Map 4"
              onClick={() => setModalImage("/workngo-site-map4.avif")}
            />
            <p className="text-xl">
              Este case alinha design centrado no usuário e impacto de negócio,
              focado no estilo de vida nômade digital. A abordagem empática
              baseada em dados reais e necessidades emocionais permite criar
              soluções que são úteis, viáveis e desejáveis.
            </p>
            <a
              href="https://www.figma.com/proto/cEXSf2bRh4AvO6ec1DQbCP/work-n-go?page-id=65%3A1862&node-id=65-1865&viewport=683%2C282%2C0.46&t=TmKT9bMhdkFiqrbq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=65%3A1865"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <u>Clicando aqui</u> é possível navegar pelo protótipo.
            </a>
          </div>
        </div>
      </section>
      {/* Navegação entre Projetos */}
      <ProjectNavigation currentProjectHref="/auto-servico" />

      {/* Modal para Imagem Ampliada */}
      <Dialog
        open={modalImage !== null}
        onOpenChange={() => setModalImage(null)}
      >
        <DialogContent className="p-0 max-w-4xl">
          <DialogTitle className="sr-only">Imagem Ampliada</DialogTitle>
          {modalImage && (
            <Image
              src={modalImage}
              alt="Imagem Ampliada"
              layout="responsive"
              width={1200}
              height={800}
            />
          )}
        </DialogContent>
      </Dialog>
    </article>
  );
}
