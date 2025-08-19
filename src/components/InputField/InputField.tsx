import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500",
  outlined:
    "border border-gray-400 focus:ring-2 focus:ring-blue-500 bg-transparent",
  ghost: "bg-transparent border-b border-gray-400 focus:border-blue-500",
};

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="font-medium text-gray-700 text-sm">{label}</label>
      )}

      <input
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid}
        className={`
          rounded-md 
          ${sizeClasses[size]} 
          ${variantClasses[variant]} 
          ${invalid ? "border-red-500 focus:ring-red-500" : ""}
          ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
        `}
      />

      {invalid && errorMessage ? (
        <span className="text-red-500 text-xs">{errorMessage}</span>
      ) : helperText ? (
        <span className="text-gray-500 text-xs">{helperText}</span>
      ) : null}
    </div>
  );
};

export default InputField;
