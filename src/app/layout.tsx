import type { Metadata } from "next";
import { Gloock, League_Spartan } from "next/font/google";
import "./globals.css";

// Títulos / logo — display serif da IDV (Gloock só tem peso 400).
const gloock = Gloock({
  weight: "400",
  variable: "--font-gloock",
  display: "swap",
  subsets: ["latin"],
});

// Corpo — League Spartan (variable).
const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  display: "swap",
  subsets: ["latin"],
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
    <html lang="pt-BR" className="h-full antialiased">
      <body
        className={`${gloock.variable} ${leagueSpartan.variable} min-h-full flex flex-col bg-white text-ink font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
