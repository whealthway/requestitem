import React from "react";

const RadioButton = ({
  register,
  name,
  value,
  itemDescription,
  handleRadioChange,
}) => {
  return (
    <input
      {...register(name)}
      type="radio"
      id={value}
      value={value}
      checked={itemDescription === value}
      onChange={handleRadioChange}
      className="h-6 w-6"
    />
  );
};

export default RadioButton;
