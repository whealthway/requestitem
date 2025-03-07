import React from "react";

const SecButton = ({
  type,
  buttonName,
  btnColor,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-[21px] p-4 w-auto ${
        btnColor ? btnColor : "bg-red-400"
      } rounded-md hover:scale-105`}
    >
      {buttonName}
      {children}
    </button>
  );
};

export default SecButton;
