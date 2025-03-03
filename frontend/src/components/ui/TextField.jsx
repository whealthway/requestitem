import React from "react";

const TextField = ({
  register,
  type,
  name,
  value,
  onchange,
  placeholder = "",
  className,
}) => {
  return (
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      id={name}
      name={name}
      value={value}
      onChange={onchange}
      className="p-2 text-[21px] h-12 w-80 border border-gray-400 rounded-md outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"
      // className="text-[12px] p-[8px] h-[32px] w-[100%] md:h-[56px] md:w-[300px] md:p-[16px] md:text-[18px] lg:text-[20px] lg:p-[20px] lg:w-[400px] lg:h-[64px] outline-none border border-gray-300 shadow-lg rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"
    ></input>
  );
};

export default TextField;
