// src/components/ClickableImage.tsx
import Image from "next/image";

type ClickableImageProps = {
  src: string;
  alt: string;
  onClick: () => void;
};

// Este componente encapsula toda a lógica de botão + imagem que você estava repetindo
export function ClickableImage({ src, alt, onClick }: ClickableImageProps) {
  return (
    <button
      onClick={onClick}
      className="w-full transition-shadow duration-300 ease-in-out hover:shadow-2xl rounded-lg"
    >
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
    </button>
  );
}
