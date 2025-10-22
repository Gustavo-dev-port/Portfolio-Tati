import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} Tatiana Goes. Todos os direitos reservados.
        </p>
        <div className="flex justify-center mt-4">
          <Link
            href="https://www.linkedin.com/in/tati-goes"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <Linkedin className="w-5 h-5 inline-block" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
