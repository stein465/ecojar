import type { Metadata } from "next";
import { Karma, League_Spartan, Poppins } from "next/font/google";
import "./globals.css";

const karma = Karma({
  weight: ["400", "700"],
  variable: "--font-karma",
  display: "swap",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  weight: ["300", "400"],
  variable: "--font-league-spartan",
  display: "swap",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["800"],
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"],
});

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
        className={`${karma.variable} ${leagueSpartan.variable} ${poppins.variable} min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
