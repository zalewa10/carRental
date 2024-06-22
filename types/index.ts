import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
}
