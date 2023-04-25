import React, { useEffect, useState } from "react";
import { LanguageName } from "@uiw/codemirror-extensions-langs";

interface DropdownOption {
  options: string[];
  onChange?: (value: LanguageName) => void;
  languageMap?: { [key: string]: LanguageName };
  isDisabled?: boolean;
  rest?: unknown;
}

const Dropdown: React.FC<DropdownOption> = ({
  options,
  onChange,
  languageMap = {},
  isDisabled,
  ...rest
}): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      const languageName = languageMap[newValue] || newValue;
      console.log("languageName", languageName);
      onChange(languageName);
    }
  };

  useEffect(() => {
    const initLang = options.find((langName) => langName === "javascript");
    console.log("initLang", initLang);

    const languageName = initLang
      ? languageMap[initLang] || initLang
      : "javascript";

    setValue(languageName);
  }, []);

  return (
    <select
      className="capitalize"
      value={value}
      onChange={handleChange}
      {...rest}
      disabled={isDisabled}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
