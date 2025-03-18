import React from "react";

const Label = ({ labelName, isTitle, className }) => {
  return (
    <label
      className={`${
        isTitle ? "font-semibold text-[18px] " : "text-[16px]"
      } ${className}`}
    >
      {labelName}
    </label>
  );
};

export default Label;
