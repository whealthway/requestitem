import React from "react";

const SecButton = ({
  type,
  btnColor,
  onClick,
  disabled,
  buttonName,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-[18px] py-2 px-4 w-auto ${
        btnColor ? btnColor : "bg-red-400"
      } rounded-md hover:scale-105`}
    >
      {buttonName}
      {children}
    </button>
  );
};

export default SecButton;
