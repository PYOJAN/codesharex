import React from "react";

export type ButtonType = "button" | "submit";

interface ButtonOption {
  type: ButtonType;
  rest?: any[];
  buttonLabel: string;
  className: string;
  onClick: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonOption> = ({
  type,
  onClick,
  buttonLabel,
  className,
  ...rest
}): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      {...rest}
      className={`${className} outline-none border-none ring-2 active:ring-cyan-600 px-2 bg-cyan-400 rounded text-slate-100 capitalize font-semibold tracking-wide hover:bg-cyan-500 transition-all duration-150 ease-linear`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
