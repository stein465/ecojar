import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

// Com `href` → renderiza <a>; sem `href` → renderiza <button>.
type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

// Tratamento visual provisório (vem da Yasmim). O que importa aqui é a estrutura:
// variantes, estados e bind 100% por token. Zero hex.
const baseClasses = [
  "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium",
  "min-h-11 select-none transition-colors", // min-h-11 = 44px → alvo de toque no mobile
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ambar",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-noir",
  "disabled:opacity-50 disabled:cursor-not-allowed",
].join(" ");

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-ambar text-noir hover:bg-ambar-400 active:bg-ambar-400",
  secondary: "bg-vinho text-blush hover:bg-vinho-900 active:bg-vinho-900",
  outline: "border border-rosa/60 text-blush hover:bg-noir-700 active:bg-noir-700",
  ghost: "text-blush hover:bg-noir-700 active:bg-noir-700",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 text-sm",
  md: "px-6 text-base",
  lg: "px-8 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (rest.href !== undefined) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
