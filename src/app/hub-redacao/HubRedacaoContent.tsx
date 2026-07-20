// src/app/hub-redacao/HubRedacaoContent.tsx
"use client";

import Image from "next/image";
import ProjectNavigation from "@/components/ProjectNavigation";
import { ProjectImageDialog } from "@/components/ProjectImageDialog";
import { useImageModal } from "@/hooks/useImageModal";
import { ClickableImage } from "@/components/ClickableImage";

export default function HubRedacaoContent() {
  const { modalImage, openModal, closeModal } = useImageModal();

  return (
    <article className="bg-white dark:bg-gray-800">
      {/* Seção Hero do Projeto (Título e Subtítulo) */}
      <section className="bg-white dark:bg-gray-900 py-24 px-4">
        <div className="container mx-auto max-w-4xl text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1b1b1b] dark:text-white mb-4">
            Hub centralizado de gestão de redações para professores da rede
            estadual de São Paulo.
          </h1>
          <p className="text-2xl md:text-2xl text-gray-700 dark:text-gray-300">
            Proposta vigente, status de correção por aluno e desempenho de
            turma reunidos em uma única tela para agilizar a intervenção
            pedagógica.
          </p>
        </div>
      </section>

      {/* Imagem de Capa do Projeto */}
      <section className="container mx-auto max-w-6xl px-4 -mt-8">
        <div className="overflow-hidden rounded-lg shadow-2xl aspect-video">
          <Image
            src="/hub-redacao/capa.avif"
            alt="Professor utilizando o Hub Redação em sala de aula"
            width={1200}
            height={675}
            sizes="(max-width: 1152px) 100vw, 1152px"
            priority
            className="w-full h-full object-cover object-[50%_30%]"
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
              Os professores de redação precisavam navegar por múltiplas
              plataformas — SED, CMSP e Sala do Futuro — para gerenciar as
              produções textuais dos alunos e acompanhar seu desempenho. Esse
              ecossistema multi-plataforma gerava sobrecarga operacional e
              reduzia o tempo disponível para a intervenção pedagógica, que é
              o trabalho central do professor.
            </p>
            <p className="text-xl mt-4">
              O desafio era duplo: mapear as principais necessidades desses
              professores e reunir em uma única plataforma as informações
              necessárias para apoiar suas decisões pedagógicas, reduzindo o
              tempo gasto com gestão de dados. O produto também precisaria
              funcionar em um contexto de infraestrutura precária — internet
              oscilante e equipamentos obsoletos.
            </p>
            <p className="text-xl mt-4">
              A resposta foi desenvolver um ambiente único onde o professor
              acessa os dados de forma rápida, prática e fluída, conseguindo
              compreender o estado da turma e tomar as medidas pedagógicas
              necessárias.
            </p>
          </div>
        </div>
      </section>

      {/* Seção "Como foi feito" */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-2xl dark:prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-[#1b1b1b] dark:text-white mb-6">
              Como foi feito
            </h2>
            <p className="text-xl">
              O projeto foi estruturado em fases alinhadas aos prazos dos
              stakeholders envolvidos, da descoberta à validação com usuários.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            <ClickableImage
              src="/hub-redacao/fases.jpg"
              alt="Fases do projeto: benchmark e desk research, mapeamento de jornada, user research e prototipação hi-fi"
              onClick={() => openModal("/hub-redacao/fases.jpg")}
            />
          </div>
          <div className="prose prose-2xl dark:prose-invert max-w-none mt-8">
            <p className="text-xl">
              O processo de discovery teve início com uma Matriz CSD para
              mapear certezas, suposições e dúvidas sobre o contexto dos
              professores, definindo o escopo da pesquisa e evitando que
              decisões de design partissem de algum viés não verificado.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            <ClickableImage
              src="/hub-redacao/matriz-csd.jpg"
              alt="Matriz CSD com certezas, suposições e dúvidas mapeadas para o projeto"
              onClick={() => openModal("/hub-redacao/matriz-csd.jpg")}
            />
          </div>
          <div className="prose prose-2xl dark:prose-invert max-w-none mt-8">
            <p className="text-xl">
              Realizamos uma desk research com foco em boas práticas de design
              de dashboards analíticos e visualização de dados em contextos
              educacionais, que gerou diretrizes concretas — como o padrão de
              drill-down progressivo e cuidados com contraste e daltonismo —
              para as decisões de interface ao longo do projeto.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            <ClickableImage
              src="/hub-redacao/desk-research-dashboards.avif"
              alt="Desk research sobre boas práticas de dashboards analíticos"
              onClick={() =>
                openModal("/hub-redacao/desk-research-dashboards.avif")
              }
            />
            <ClickableImage
              src="/hub-redacao/desk-research-diretrizes.jpg"
              alt="Diretrizes de arquitetura da informação e padrões de interação definidos a partir da desk research"
              onClick={() =>
                openModal("/hub-redacao/desk-research-diretrizes.jpg")
              }
            />
          </div>
          <div className="prose prose-2xl dark:prose-invert max-w-none mt-8">
            <p className="text-xl">
              O benchmark de mercado analisou plataformas educacionais com
              funcionalidades similares — SAS Educação, Plurall, FTD Iônica,
              Google Classroom e Khan Academy — com foco em como cada uma
              estrutura a visão geral de turma, o acompanhamento individual
              por aluno e a apresentação de dados de desempenho. O estudo
              reforçou o padrão de drill-down progressivo como referência
              consolidada e informou decisões sobre hierarquia de informação e
              organização visual do hub.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            <ClickableImage
              src="/hub-redacao/benchmark-sas-educacao.jpg"
              alt="Benchmark: SAS Educação"
              onClick={() => openModal("/hub-redacao/benchmark-sas-educacao.jpg")}
            />
            <ClickableImage
              src="/hub-redacao/benchmark-plurall.jpg"
              alt="Benchmark: Plurall (Somos)"
              onClick={() => openModal("/hub-redacao/benchmark-plurall.jpg")}
            />
            <ClickableImage
              src="/hub-redacao/benchmark-ftd-ionica.jpg"
              alt="Benchmark: FTD Iônica"
              onClick={() => openModal("/hub-redacao/benchmark-ftd-ionica.jpg")}
            />
            <ClickableImage
              src="/hub-redacao/benchmark-google-classroom.jpg"
              alt="Benchmark: Google Classroom"
              onClick={() =>
                openModal("/hub-redacao/benchmark-google-classroom.jpg")
              }
            />
            <ClickableImage
              src="/hub-redacao/benchmark-khan-academy.jpg"
              alt="Benchmark: Khan Academy"
              onClick={() => openModal("/hub-redacao/benchmark-khan-academy.jpg")}
            />
          </div>
          <div className="prose prose-2xl dark:prose-invert max-w-none mt-8">
            <p className="text-xl">
              Com o escopo e as diretrizes pré-definidos, mapeamos a jornada e
              então desenvolvemos um protótipo navegável de alta fidelidade
              para ser aplicado num teste de usabilidade remoto não moderado
              via Maze com 296 professores de redação da rede estadual,
              durante nove dias. O teste combinou perguntas exploratórias,
              user tasks e escalas de percepção, coletando dados quantitativos
              e qualitativos para validar as principais hipóteses do projeto.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            <ClickableImage
              src="/hub-redacao/jornada-mapeada.jpg"
              alt="Mapeamento da jornada do professor entre discussão em sala, rascunho, envio e correção"
              onClick={() => openModal("/hub-redacao/jornada-mapeada.jpg")}
            />
            <ClickableImage
              src="/hub-redacao/prototipo-hifi.png"
              alt="Protótipo de alta fidelidade do Hub Redação com status de correção e desempenho por critério"
              onClick={() => openModal("/hub-redacao/prototipo-hifi.png")}
            />
          </div>
        </div>
      </section>

      {/* Seção Resultados */}
      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-2xl dark:prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-[#1b1b1b] dark:text-white mb-6">
              Resultados
            </h2>
            <p className="text-xl">
              O teste validou a hipótese central do projeto: o hub proposto
              melhora a jornada de correção e acompanhamento do professor.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            <ClickableImage
              src="/hub-redacao/resultado-hipotese-validada.png"
              alt="Hipótese validada no teste de usabilidade, com depoimentos de professores participantes"
              onClick={() =>
                openModal("/hub-redacao/resultado-hipotese-validada.png")
              }
            />
          </div>
          <div className="prose prose-2xl dark:prose-invert max-w-none mt-8">
            <ul className="list-disc pl-5 text-xl mt-2">
              <li>
                <b>85%</b> dos professores afirmaram que os dados apresentados
                auxiliariam nas suas decisões pedagógicas.
              </li>
              <li>
                <b>82%</b> tiveram sucesso na identificação de datas-limite e
                compreensão dos status de correção.
              </li>
              <li>
                <b>75%</b> interpretaram os gráficos de desempenho
                corretamente, com respostas direcionadas a ações pedagógicas
                concretas como retomar conteúdos com maior defasagem e propor
                atividades específicas por competência.
              </li>
              <li>
                <b>78%</b> aprovaram a visualização de rascunhos, reconhecendo
                a feature como um ponto de intervenção antecipada, não apenas
                como ferramenta de correção, mas como suporte ao acompanhamento
                do processo de escrita do aluno.
              </li>
            </ul>
          </div>
          <div className="mt-8 space-y-8">
            <ClickableImage
              src="/hub-redacao/resultado-pesquisa-usabilidade.png"
              alt="Pesquisa de usabilidade: aspectos avaliados aprovados e voz do usuário"
              onClick={() =>
                openModal("/hub-redacao/resultado-pesquisa-usabilidade.png")
              }
            />
            <ClickableImage
              src="/hub-redacao/resultado-geracao-valor.png"
              alt="Geração de valor: dados para a prática pedagógica"
              onClick={() =>
                openModal("/hub-redacao/resultado-geracao-valor.png")
              }
            />
            <ClickableImage
              src="/hub-redacao/resultado-tarefas.png"
              alt="Taxas de sucesso das tarefas de localizar aluno, transcrever redação e acessar rubricas"
              onClick={() => openModal("/hub-redacao/resultado-tarefas.png")}
            />
          </div>
          <div className="prose prose-2xl dark:prose-invert max-w-none mt-8">
            <p className="text-xl">
              O componente mais comentado foi o Kanban. A organização visual
              por cores foi destacada como facilitadora de leitura rápida, e o
              modelo mental de contadores por coluna foi bem compreendido. A
              ordenação alfabética dos alunos foi reconhecida como natural e
              esperada.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            <ClickableImage
              src="/hub-redacao/kanban.avif"
              alt="Kanban de status de correção: não iniciadas, rascunhos, em correção, devolvidas e concluídas"
              onClick={() => openModal("/hub-redacao/kanban.avif")}
            />
          </div>
          <div className="prose prose-2xl dark:prose-invert max-w-none mt-8">
            <p className="text-xl">
              O teste também mapeou oportunidades para os próximos ciclos,
              organizadas em três frentes:
            </p>
            <ul className="list-disc pl-5 text-xl mt-2">
              <li>
                <b>Decisões de design:</b> definir filtro padrão (opção A, com
                2 campos); remover o botão de &quot;transcrever redação&quot;;
                adicionar tooltip em &quot;Concluídas&quot; (comportamento
                esperado); onboarding introdutório opcional.
              </li>
              <li>
                <b>Decisões de operação:</b> verificar a estabilidade do OCR e
                apoiar escolas com infraestrutura precária.
              </li>
              <li>
                <b>Decisões de política educacional:</b> como revisar a
                quantidade de redações por bimestre e conferir a eficácia das
                medidas contra uso de IA generativa pelos estudantes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção Conclusão */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-2xl dark:prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-[#1b1b1b] dark:text-white mb-6">
              Conclusão
            </h2>
            <p className="text-xl">
              O projeto exigiu uma imersão no cotidiano dos professores de
              redação para entender onde cada informação era acessada, em qual
              momento da aula e em qual dispositivo. Validar componentes como
              o kanban e os gráficos com usuários sem familiaridade com esses
              padrões reforçou que testar linguagem é tão importante quanto
              testar usabilidade. O produto segue em desenvolvimento, e o
              principal aprendizado foi entender que o valor do design não
              está na entrega da tela, está na qualidade da decisão que ela
              viabiliza.
            </p>
          </div>
        </div>
      </section>

      {/* Navegação para Outros Projetos */}
      <ProjectNavigation currentProjectHref="/hub-redacao" />
      <ProjectImageDialog modalImage={modalImage} onClose={closeModal} />
    </article>
  );
}
