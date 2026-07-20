import type { Metadata } from "next";
import AutoServicoContent from "./AutoServicoContent";

export const metadata: Metadata = {
  title: "Autosserviço em Recuperação de Conta | Tatiana Goes",
  description:
    "Case de UX/UI: redesenho do fluxo de recuperação de senha e troca de e-mail cadastrado para reduzir abandono e chamados no suporte.",
};

export default function PaginaAutoServico() {
  return <AutoServicoContent />;
}
