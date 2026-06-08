import type { ReactNode } from "react";

type GridColumns = 1 | 2 | 3 | 4;

type GridProps = {
  children: ReactNode;
  /** Nº de colunas no breakpoint maior. Sobe progressivamente a partir de 1. */
  columns?: GridColumns;
  className?: string;
};

// Mapa explícito p/ o Tailwind v4 detectar as classes (nada de string dinâmica).
const columnClasses: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

// Grid responsivo mínimo: default 1 → sm:2 → lg:3.
export function Grid({ children, columns = 3, className }: GridProps) {
  const classes = ["grid gap-6", columnClasses[columns], className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
