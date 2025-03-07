import React from "react";
import { HiDevicePhoneMobile } from "react-icons/hi2";

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
      className={`text-[21px] p-4 w-auto h-16 ${
        !disabled ? "bg-[#1976d2] hover:scale-105" : "bg-gray-400"
      } text-[#d9e8f8] outline-none border-solid shadow-md shadow-gray-500 rounded-md items-center ${className} `}
      hidden={hidden}
    >
      {buttonName}
      {children}
    </button>
  );
};

export default Button;
