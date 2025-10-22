import Image from "next/image";

export default function PaginaWorknGo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white dark:bg-gray-900">
      {/* Fundo branco para modo claro e cinza escuro para modo escuro */}
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">
          Transformando a experiência no carrinho de compras.
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Como o design pode redefinir a satisfação do cliente.
        </p>
      </main>
    </div>
  );
}
