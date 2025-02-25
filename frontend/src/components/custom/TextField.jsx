import React from "react";

const TextField = ({
  type,
  name,
  value,
  onchange,
  placeholder = "",
  style,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={name}
      name={name}
      value={value}
      onChange={onchange}
      className="h-7 sm:h-8 w-44 sm:w-48 md:w-52 p-2 text-[14px] sm:text-[15px] md:text-[16px] outline-none border border-gray-300 shadow-lg rounded-md"
    ></input>
  );
};

export default TextField;
