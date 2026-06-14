import type { Metadata } from "next";
import { Gloock } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Gloock — display serif da IDV (logo é imagem; usado no decorativo "visceral").
const gloock = Gloock({
  weight: "400",
  variable: "--font-gloock",
  display: "swap",
  subsets: ["latin"],
});

// Acumin Pro — tipografia de texto da IDV, servida localmente (next/font/local).
const acumin = localFont({
  src: [
    { path: "../fonts/AcuminPro-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/AcuminPro-Italic.ttf", weight: "400", style: "italic" },
    { path: "../fonts/AcuminPro-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/AcuminPro-Semibold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/AcuminPro-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/AcuminPro-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-acumin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ecojar",
  description: "Cosmética botânica de alta performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${gloock.variable} ${acumin.variable} h-full antialiased scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
