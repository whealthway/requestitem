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
      className={`px-4 py-2 text-[18px] h-12 w-auto ${
        !disabled ? "bg-[#1976d2] hover:scale-105" : "bg-gray-400"
      } text-[#d9e8f8] outline-none border-solid shadow-md shadow-gray-500 rounded-md items-center ${className} `}
      hidden={hidden}
    >
      {buttonName}
    </button>
  );
};

export default Button;
