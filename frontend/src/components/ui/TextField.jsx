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
      className="text-[12px] p-[8px] h-[32px] w-[100%] md:h-[56px] md:w-[300px] md:p-[16px] md:text-[18px] lg:text-[20px] lg:p-[20px] lg:w-[400px] lg:h-[64px] outline-none border border-gray-300 shadow-lg rounded-md"
    ></input>
  );
};

export default TextField;
