import React from "react";

const Label = ({ labelName }) => {
  return (
    <label
      htmlFor=""
      className="m-2 text-center px-2 text-[14px] sm:text-[13px] md:text-[14px]"
    >
      {labelName}
    </label>
  );
};

export default Label;
