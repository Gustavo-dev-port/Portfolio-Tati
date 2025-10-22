import Image from "next/image";

export default function PaginaFrete() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white dark:bg-gray-900">
      {" "}
      {/* Fundo branco para modo claro e cinza escuro para modo escuro */}
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">
          Página de Frete
        </h1>
      </main>
    </div>
  );
}
