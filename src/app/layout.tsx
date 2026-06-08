import type { Metadata } from "next";
import { Gloock } from "next/font/google";
import "./globals.css";

// Títulos / logo — display serif da IDV.
const gloock = Gloock({
  weight: "400",
  variable: "--font-gloock",
  display: "swap",
  subsets: ["latin"],
});

// TODO(fonts): corpo é Acumin Pro, que NÃO existe no next/font/google.
// Wire via next/font/local (arquivos .woff2 licenciados) ou Adobe Fonts, expondo
// a CSS var --font-acumin. Exemplo (quando houver os arquivos):
//
//   import localFont from "next/font/local";
//   const acumin = localFont({
//     src: [{ path: "../fonts/AcuminPro-Regular.woff2", weight: "400", style: "normal" }],
//     variable: "--font-acumin",
//     display: "swap",
//   });
//
// e adicionar `acumin.variable` ao className do <body>.
// Por ora o fallback "Inter"/system-ui (em globals.css) segura o corpo.

export const metadata: Metadata = {
  title: "Ecojar",
  description: "Ecojar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body
        className={`${gloock.variable} min-h-full flex flex-col bg-noir text-blush font-body`}
      >
        {children}
      </body>
    </html>
  );
}
