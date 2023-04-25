import React, { useState } from "react";

export type InputType = "text" | "password" | "email" | "number";

interface InputOption {
  type: InputType;
  name: string;
  lable: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  rest?: React.InputHTMLAttributes<HTMLInputElement>; // change the type of the rest prop
}

const Input: React.FC<InputOption> = ({
  type,
  name,
  lable,
  placeholder,
  className,
  value,
  onChange,
  disabled,
  rest,
}): JSX.Element => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className="input-control flex flex-col">
      <label
        htmlFor={name}
        className="mb-1 text-base sm:text-lg text-slate-100"
      >
        {lable}
      </label>
      <input
        className={`${className} w-full py-2 px-3 text-slate-800 outline-none border-none rounded ring-2 focus:ring-cyan-600 transition-all duration-300`}
        type={type}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};

export default Input;
