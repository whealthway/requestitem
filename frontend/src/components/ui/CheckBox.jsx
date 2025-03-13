import React from "react";

const CheckBox = ({ register, name, isChecked, handleCheckboxChange }) => {
  return (
    <input
      {...register(name)}
      type="checkbox"
      // checked={isChecked}
      // onChange={handleCheckboxChange}
      className="h-6 w-6"
    />
  );
};

export default CheckBox;
