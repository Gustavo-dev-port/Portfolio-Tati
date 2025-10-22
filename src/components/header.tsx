import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav
        className="fixed top-0 w-full z-50 h-16  text-white flex items-center
      bg-gray-800/80 backdrop-blur-md
      hover:bg-gray-800
      transition-all duration-300"
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/">Tatiana Goes</Link>
          <div className="flex gap-4">
            <Link href="/sobre-mim">Sobre-mim</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
