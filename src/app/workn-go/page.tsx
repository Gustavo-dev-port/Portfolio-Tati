import type { Metadata } from "next";
import WorknGoContent from "./WorknGoContent";

export const metadata: Metadata = {
  title: "Case Work'n Go | Tatiana Goes",
  description:
    "Case de UX/UI: plataforma para nômades digitais com navegação simples para acomodações, trabalho e eventos ao redor do mundo.",
};

export default function PaginaWorknGo() {
  return <WorknGoContent />;
}
