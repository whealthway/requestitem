import React from "react";

const Label = ({ labelName, isTitle }) => {
  return (
    <label className={`${isTitle ? "font-bold text-[21px] " : "text-[18px]"}`}>
      {labelName}
    </label>
  );
};

export default Label;
