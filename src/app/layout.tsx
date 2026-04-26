import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "@/components/Footer";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Tatiana Goes — Product Designer",
  description:
    "Portfólio de Tatiana Goes, Product Designer em São Paulo. Cases de UX, UI e Design Strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Evita flash de tema errado antes da hidratação */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&p))document.documentElement.classList.add('dark');})();`,
          }}
        />
      </head>
      <body className={`${sourceSans.variable} font-sans text-[#1b1b1b] dark:text-gray-300`}>
        <header>
          <Header />
        </header>
        <main className="pt-16">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
