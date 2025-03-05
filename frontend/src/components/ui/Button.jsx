import React from "react";

const Button = ({
  type,
  buttonName,
  className,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick} // add function pointed to API
      disabled={disabled}
      className={`h-[32px] w-auto p-[4px] sm:h-[40px] sm:w-auto sm:p-[8px] md:p-[12px] md:h-[48px] md:w-auto lg:h-[64px] lg:w-auto lg:p-[20px] lg:text-[20px] ${
        !disabled ? "bg-[#1976d2] hover:scale-100" : "bg-gray-400"
      } text-[#d9e8f8] outline-none border-solid shadow-md shadow-gray-500 rounded-md items-center ${className} `}
    >
      {buttonName}
      {children}
    </button>
  );
};

export default Button;
