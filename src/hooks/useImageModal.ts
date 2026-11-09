"use client";

import { useState } from "react";

// Imagem aberta no modal. O alt vem do botão de origem, para que o leitor de
// tela anuncie a imagem certa e não um texto genérico.
export type ModalImage = { src: string; alt: string } | null;

export function useImageModal() {
  const [modalImage, setModalImage] = useState<ModalImage>(null);

  return {
    modalImage,
    openModal: (src: string, alt: string) => setModalImage({ src, alt }),
    closeModal: () => setModalImage(null),
  };
}
