"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type ProjectImageDialogProps = {
  modalImage: string | null;
  onClose: () => void;
};

// Modal de imagem ampliada compartilhado pelas páginas de projeto,
// garantindo o mesmo estilo/comportamento em todos os cases.
export function ProjectImageDialog({
  modalImage,
  onClose,
}: ProjectImageDialogProps) {
  return (
    <Dialog open={!!modalImage} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="w-[90vw] max-w-[1400px] overflow-y-auto p-0">
        {modalImage && (
          <>
            <DialogTitle className="sr-only">
              Imagem Ampliada do Projeto
            </DialogTitle>
            <Image
              key={modalImage}
              src={modalImage}
              alt="Imagem ampliada do projeto"
              width={1920}
              height={1080}
              sizes="90vw"
              className="w-full h-auto object-contain rounded-lg"
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
