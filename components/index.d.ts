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

export interface BadgeProps {
  tone?: "orange" | "blue" | "green" | "red" | "purple" | "black";
  /** pill = rounded tag; label = small uppercase badge */
  shape?: "pill" | "label";
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;

export interface NoticeProps {
  tone?: "success" | "info" | "warning" | "error";
  title?: React.ReactNode;
  children?: React.ReactNode;
}
export function Notice(props: NoticeProps): JSX.Element;

export interface ThemeToggleProps {
  /** One button that cycles system → light → dark, for a topbar. Default: a three-way switch. */
  compact?: boolean;
  /** Show the words next to the icons in the three-way switch. */
  showLabels?: boolean;
  /** Accessible name of the switch. Default "Thema". */
  label?: string;
  /** Option names; defaults "Licht", "Systeem", "Donker". */
  labelLight?: string;
  labelSystem?: string;
  labelDark?: string;
}
/** Light / system / dark switch. Needs components/lib/surf-theme.js, which stores the choice and sets data-theme on <html>. */
export declare function ThemeToggle(props: ThemeToggleProps): React.ReactElement;
