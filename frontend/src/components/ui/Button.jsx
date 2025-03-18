import React from "react";

const Button = ({
  type,
  buttonName,
  className,
  onClick,
  disabled,
  children,
  hidden,
}) => {
  return (
    <button
      type={type}
      onClick={onClick} // add function pointed to API
      disabled={disabled}
      className={`flex gap-2 font-semibold px-4 py-2 text-[18px] h-12 w-auto rounded-lg ${
        !disabled
          ? "bg-[#1976d2] hover:scale-105"
          : "bg-gray-300 text-slate-700"
      } text-[#d9e8f8] smooth outline-none border-gray-300 border-solid shadow-md shadow-blue-200 items-center ${className} `}
      hidden={hidden}
    >
      {children}
      {buttonName}
    </button>
  );
};

export default Button;
