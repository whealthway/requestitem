import React from "react";

const Label = ({ labelName, isTitle }) => {
  return (
    <label className={`${isTitle ? "font-bold text-[24px] " : "text-[21px] "}`}>
      {labelName}
    </label>
  );
};

export default Label;
