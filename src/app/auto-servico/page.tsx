import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";
import AutoServicoContent from "./AutoServicoContent";

export const metadata: Metadata = {
  ...pageAlternates("/auto-servico"),
  title: "Autosserviço em Recuperação de Conta | Tatiana Goes",
  description:
    "Case de UX/UI: redesenho do fluxo de recuperação de senha e troca de e-mail cadastrado para reduzir abandono e chamados no suporte.",
};

export default function PaginaAutoServico() {
  return <AutoServicoContent />;
}
