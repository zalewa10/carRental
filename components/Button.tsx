"use client";

import { ButtonProps } from "@/types";

function Button({ title, className, btnType, handleClick }: ButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${className}`}
      onClick={() => {}}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
}

export default Button;
