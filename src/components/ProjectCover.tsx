// Imagem de capa (16:9) compartilhada pelas páginas de projeto.
import Image from "next/image";

type ProjectCoverProps = {
  src: string;
  alt: string;
  // Classe Tailwind de posicionamento, por exemplo "object-[50%_62%]".
  // Deve ser escrita literalmente na página que a usa, para o Tailwind gerá-la.
  objectPosition: string;
};

export default function ProjectCover({
  src,
  alt,
  objectPosition,
}: ProjectCoverProps) {
  return (
    <section className="container mx-auto max-w-6xl px-4 -mt-8">
      <div className="overflow-hidden rounded-lg shadow-2xl aspect-video">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          sizes="(max-width: 1152px) 100vw, 1152px"
          priority
          className={`w-full h-full object-cover ${objectPosition}`}
        />
      </div>
    </section>
  );
}
