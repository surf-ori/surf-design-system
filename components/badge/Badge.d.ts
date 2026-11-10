import * as React from "react";
export interface BadgeProps {
  tone?: "orange" | "blue" | "green" | "red" | "purple" | "black";
  /** pill = rounded tag; label = small uppercase badge */
  shape?: "pill" | "label";
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
