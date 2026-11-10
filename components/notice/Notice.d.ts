import * as React from "react";
export interface NoticeProps {
  tone?: "success" | "info" | "warning" | "error";
  title?: React.ReactNode;
  children?: React.ReactNode;
}
export function Notice(props: NoticeProps): JSX.Element;
