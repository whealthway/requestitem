import React from "react";

const Label = ({ labelName, isTitle, className }) => {
  return (
    <label
      className={`text-[#495057]${
        isTitle ? "font-bold text-[16px] " : "text-[16px]"
      } ${className}`}
    >
      {labelName}
    </label>
  );
};

export default Label;
