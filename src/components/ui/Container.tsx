import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

// Centraliza a largura máxima e o respiro horizontal num lugar só.
export function Container({ children, className }: ContainerProps) {
  const classes = ["mx-auto max-w-7xl px-5 md:px-8", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
