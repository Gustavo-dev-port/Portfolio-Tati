import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";
import FreteContent from "./FreteContent";

export const metadata: Metadata = {
  ...pageAlternates("/frete"),
  title: "Frete no Carrinho de Compras | Tatiana Goes",
  description:
    "Case de UX/UI: como o cálculo transparente de frete no carrinho reduziu o abandono de compra e aumentou a confiança do cliente.",
};

export default function PaginaFrete() {
  return <FreteContent />;
}
