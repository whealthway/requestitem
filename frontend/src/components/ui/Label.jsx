import React from "react";

const Label = ({ labelName }) => {
  return (
    <label className="text-[14px] md:text-[16px] lg:text-[18px]">
      {labelName}
    </label>
  );
};

export default Label;
