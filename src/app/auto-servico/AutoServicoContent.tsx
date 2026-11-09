// src/app/auto-servico/AutoServicoContent.tsx
"use client";

import ProjectHero from "@/components/ProjectHero";
import ProjectCover from "@/components/ProjectCover";
import ProjectNavigation from "@/components/ProjectNavigation";
import { ProjectImageDialog } from "@/components/ProjectImageDialog";
import { useImageModal } from "@/hooks/useImageModal";
import { ClickableImage } from "@/components/ClickableImage";

export default function AutoServicoContent() {
  const { modalImage, openModal, closeModal } = useImageModal();

  return (
    <article className="bg-white dark:bg-gray-800">
      {/* Seção Hero do Projeto (Título e Subtítulo) */}
      <ProjectHero
        title="Autosserviço em recuperação de conta"
        subtitle="Projeto de autoatendimento para recuperação de senha e troca de e-mail cadastrado."
      />

      {/* Imagem de Capa do Projeto */}
      <ProjectCover
        src="/auto-servico/capa.avif"
        alt="Capa do projeto Autosserviço"
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
              O desafio surgiu a partir da identificação de um{" "}
              <b>alto volume de chamados no suporte</b> e dados capturados pelo
              Hotjar,{" "}
              <b>
                relacionados a problemas de login e recuperação de senha e perda
                ou inutilização de um e-mail cadastrado
              </b>
              . Além disso, a jornada existente não apresentava a opção de
              alterar o e-mail cadastrado, o que gerava frustração e abandono no
              processo de acesso da conta. É uma etapa sensível, pois envolve
              segurança de dados e impacto direto na confiança do usuário em
              relação à marca.
            </p>
            <p className="text-xl mt-4">
              Diante disso, foi proposto o redesenho do fluxo de{" "}
              <b>recuperação de conta</b>, com o objetivo de:
            </p>
            <div className="text-xl mt-4">
              <ul className="list-disc pl-5 ">
                <li>
                  <b>Reduzir contatos</b> desnecessários com o SAC.
                </li>
                <li>
                  Tornar o processo mais intuitivo e{" "}
                  <b>autossuficiente com controle e liberdade para o usuário</b>
                  .
                </li>
                <li>
                  Garantir <b>segurança</b> no processo de redefinição.
                </li>
                <li>
                  <b>Diminuir o abandono</b> e aumentar a taxa de sucesso de
                  redefinição de credenciais, mantendo a base sempre quente com
                  informações atualizadas.
                </li>
              </ul>
            </div>
          </div>
          {/* Imagens (Contexto Research) */}
          <div className="mt-8 space-y-8">
            <ClickableImage
              src="/auto-servico/contexto.avif"
              alt="Contexto do case Autosserviço em recuperação de conta"
              onClick={() => openModal("/auto-servico/contexto.avif", "Contexto do case Autosserviço em recuperação de conta")}
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
              Foi feito um benchmark e uma desk research para construir uma base
              sólida de argumentos para decisões de design alinhadas tanto às
              expectativas dos usuários quanto às práticas do mercado:
            </p>
          </div>
          <div className="mt-8 space-y-8">
            <ClickableImage
              src="/auto-servico/research1.avif"
              alt="Desk research, 1 de 2, do case Autosserviço em recuperação de conta"
              onClick={() => openModal("/auto-servico/research1.avif", "Desk research, 1 de 2, do case Autosserviço em recuperação de conta")}
            />
            <ClickableImage
              src="/auto-servico/research2.avif"
              alt="Desk research, 2 de 2, do case Autosserviço em recuperação de conta"
              onClick={() => openModal("/auto-servico/research2.avif", "Desk research, 2 de 2, do case Autosserviço em recuperação de conta")}
            />
          </div>
          <div className="prose prose-2xl dark:prose-invert max-w-none mt-8">
            <p className="text-xl">
              Com a desk research confirmamos nossa hipótese de que usuários
              abandonam a jornada devido a um login complicado:
            </p>
            <a href="https://www.pontoisp.com.br/experiencia-boa-de-login-e-senha-e-essencial-para-usuario">
              <u className="text-xl mt-1">
                84% dos consumidores latino-americanos abandonaram totalmente
                uma tentativa de compra ou registro devido a uma experiência de
                login complicada.
              </u>
            </a>
            <p className="text-xl mt-4">
              Depois de mapear a jornada atual do fluxo de login, desenhamos dois
              caminhos complementares:
            </p>
            <div className="mt-4">
              <ul className="list-disc pl-5 text-xl">
                <li>O fluxo tradicional de redefinição de senha via e-mail.</li>
                <li>
                  Um novo fluxo alternativo, que permite ao usuário informar que
                  não tem acesso ao e-mail original. Nesse caso, ele passa por
                  etapas de verificação de identidade (como CPF, telefone
                  cadastrado e SMS) e, uma vez validado, pode registrar um novo
                  e-mail para receber o link de redefinição
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 space-y-8">
            <ClickableImage
              src="/auto-servico/fluxo.avif"
              alt="Fluxo da solução do case Autosserviço em recuperação de conta"
              onClick={() => openModal("/auto-servico/fluxo.avif", "Fluxo da solução do case Autosserviço em recuperação de conta")}
            />
          </div>
          <div className="prose prose-2xl dark:prose-invert max-w-none mt-8">
            <p className="text-xl mt-4">
              A solução foi desenvolvida nas seguintes etapas:
            </p>
            <ol className="list-disc pl-5 text-xl mt-2">
              <li>
                Pesquisa e benchmark: investigamos reclamações de usuários e
                práticas de mercado em serviços de moda ou e-commerce.
                Identificamos que grande parte das frustrações vinha da falta de
                alternativas de um auto serviço ou de contato.
              </li>
              <li>
                Cocriação: conduzimos workshops com stakeholders e time de
                segurança para alinhar critérios de validação.
              </li>
              <li>
                Prototipação: criamos fluxos testáveis em protótipos navegáveis
                atualizando o Design System e respeitando as regras de handoff.
              </li>
            </ol>
          </div>
          <div className="mt-8">
            <ClickableImage
              src="/auto-servico/prototipo1.avif"
              alt="Protótipo, 1 de 2, da solução do case Autosserviço em recuperação de conta"
              onClick={() => openModal("/auto-servico/prototipo1.avif", "Protótipo, 1 de 2, da solução do case Autosserviço em recuperação de conta")}
            />
            <ClickableImage
              src="/auto-servico/prototipo2.avif"
              alt="Protótipo, 2 de 2, da solução do case Autosserviço em recuperação de conta"
              onClick={() => openModal("/auto-servico/prototipo2.avif", "Protótipo, 2 de 2, da solução do case Autosserviço em recuperação de conta")}
            />
          </div>
        </div>
      </section>
      {/*-- Seção Resultados --*/}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-2xl dark:prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-[#1b1b1b] dark:text-white mb-6">
              Resultados
            </h2>
            <p className="text-xl">
              A decisão de redesenhar o fluxo de recuperação de senha e de troca
              de e-mail cadastrado surgiu da interseção entre necessidades reais
              dos usuários e os objetivos estratégicos da empresa. Esse
              equilíbrio entre empatia com o usuário, eficiência operacional e
              impacto na retenção fundamentou a necessidade do projeto.
            </p>
            <p className="text-xl mt-4">Observamos resultados como:</p>
            <ul className="list-disc pl-5 text-xl mt-2">
              <li>Diminuição de chamados relacionados a login no SAC.</li>
              <li>
                Impacto financeiro direto, somando economia em SAC a receita
                recuperada.
              </li>
              <li>
                Aumento na taxa de sucesso no fluxo de recuperação de conta.
              </li>
              <li>Aumento da taxa de retenção devido a reversão de churn.</li>
              <li>Impacto positivo no NPS.</li>
            </ul>
            <p className="text-xl mt-4">
              O projeto melhorou a usabilidade, reduziu frustrações e aplicou
              heurísticas para garantir maior autonomia ao usuário. O processo
              de recuperação de conta foi facilitado e automatizado, resultando
              em menos ligações para o SAC, maior retenção de clientes e,
              consequentemente, aumento de receita.
            </p>
          </div>
        </div>
      </section>
      {/* Navegação para Outros Projetos */}
      <ProjectNavigation currentProjectHref="/auto-servico" />
      <ProjectImageDialog modalImage={modalImage} onClose={closeModal} />
    </article>
  );
}
