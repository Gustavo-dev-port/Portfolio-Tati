"use client";

import { useState } from "react";

export function useImageModal() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return {
    modalImage,
    openModal: setModalImage,
    closeModal: () => setModalImage(null),
  };
}
