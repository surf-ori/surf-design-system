import * as React from "react";
export interface ButtonProps {
  /** Visual style. primary = SURF orange, secondary = black. */
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
