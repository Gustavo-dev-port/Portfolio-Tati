import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-source-sans",
});

const siteTitle = "Tatiana Goes — Product Designer";
const siteDescription =
  "Portfólio de Tatiana Goes, Product Designer em São Paulo. Cases de UX, UI e Design Strategy.";

// Imagem social só é informada quando há URL base, pois sem metadataBase
// URLs relativas resolveriam para localhost.
const socialImages = siteUrl
  ? [{ url: "/profile.jpg", alt: "Tatiana Goes - Designer de UI/UX" }]
  : undefined;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "pt_BR",
    siteName: "Tatiana Goes",
    ...(socialImages ? { images: socialImages } : {}),
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    ...(socialImages ? { images: socialImages } : {}),
  },
};

// Declara explicitamente que o site suporta claro e escuro. Sem isso, alguns
// navegadores mobile (ex: "escurecer sites automaticamente" no Chrome/Samsung
// Internet no Android) tentam recolorir a página sozinhos, fazendo o modo
// claro aparecer com um fundo escuro/azulado divergente do desktop.
export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020618" },
  ],
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
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
