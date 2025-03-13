import React from "react";

const Label = ({ labelName, isTitle, className }) => {
  return (
    <label
      className={`${
        isTitle ? "font-bold text-[21px] " : "text-[18px]"
      } ${className}`}
    >
      {labelName}
    </label>
  );
};

export default Label;
