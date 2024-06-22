import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
}
export interface setManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface carProps {
  drive: string;
  transmission: string;
  make: string;
  model: string;
  fuel_type: string;
  year: number;
  city_mpg: number;
  highway_mpg: number;
  displacement: number;
}
