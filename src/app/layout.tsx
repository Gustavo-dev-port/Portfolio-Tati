import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "next-themes";
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

// Revalida a página ao menos 1x/dia para o ano exibido no rodapé (Footer)
// não ficar "congelado" no valor calculado no momento do build estático.
export const revalidate = 86400;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${sourceSans.variable} font-sans text-[#1b1b1b] dark:text-gray-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header>
            <Header />
          </header>
          <main className="pt-16">{children}</main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
