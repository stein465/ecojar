import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  /** Classe de fundo por token (ex.: "bg-vinho"). Default herda o noir do body. */
  background?: string;
  className?: string;
};

// <section> semântico com padding vertical mobile-first.
export function Section({ children, id, background, className }: SectionProps) {
  const classes = ["py-16 md:py-24", background, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}
