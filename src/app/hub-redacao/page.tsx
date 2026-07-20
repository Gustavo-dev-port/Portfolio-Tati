import type { Metadata } from "next";
import HubRedacaoContent from "./HubRedacaoContent";

export const metadata: Metadata = {
  title: "Hub Redação | Tatiana Goes",
  description:
    "Case de UX/UI: hub centralizado de gestão de redações para professores da rede estadual de São Paulo, reunindo proposta vigente, status de correção e desempenho de turma.",
};

export default function PaginaHubRedacao() {
  return <HubRedacaoContent />;
}
