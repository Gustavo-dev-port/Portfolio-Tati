"use client";

import { useLayoutEffect, useRef } from "react";
import type { ModalImage } from "@/hooks/useImageModal";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type ProjectImageDialogProps = {
  modalImage: ModalImage;
  onClose: () => void;
};

// Modal de imagem ampliada compartilhado pelas páginas de projeto,
// garantindo o mesmo estilo/comportamento em todos os cases.
export function ProjectImageDialog({
  modalImage,
  onClose,
}: ProjectImageDialogProps) {
  // O Radix devolve o foco ao Dialog.Trigger, que este modal não usa (ele é
  // aberto por botões das páginas). Guardamos o elemento que tinha o foco
  // antes da abertura e o devolvemos ao fechar. useLayoutEffect roda antes do
  // foco inicial do conteúdo, então ainda vê o botão de origem.
  const openerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (modalImage) {
      openerRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
    }
  }, [modalImage]);

  return (
    <Dialog open={!!modalImage} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent
        className="w-[95vw] max-w-[95vw] sm:max-w-[90vw] lg:max-w-[1600px] max-h-[90vh] overflow-y-auto p-0"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          openerRef.current?.focus();
        }}
      >
        {modalImage && (
          <>
            <DialogTitle className="sr-only">
              Imagem Ampliada do Projeto
            </DialogTitle>
            <DialogDescription className="sr-only">
              Visualização ampliada de uma imagem do projeto. Pressione Esc para
              fechar.
            </DialogDescription>
            <Image
              key={modalImage.src}
              src={modalImage.src}
              alt={modalImage.alt}
              width={1920}
              height={1080}
              sizes="95vw"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
