import React from "react";

const RadioButton = ({ handleRadioChange, requestMethod, name, value }) => {
  return (
    <input
      type="radio"
      id={value}
      value={value}
      checked={requestMethod === value}
      onChange={handleRadioChange}
      className="h-6 w-6 text-[21px]"
    />
  );
};

export default RadioButton;
