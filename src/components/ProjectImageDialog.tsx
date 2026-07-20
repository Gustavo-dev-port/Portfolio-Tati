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
      <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-[90vw] lg:max-w-[1600px] max-h-[90vh] overflow-y-auto p-0">
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
              sizes="95vw"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
