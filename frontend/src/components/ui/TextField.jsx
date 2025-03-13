import React from "react";

const TextField = ({
  register = {},
  name,
  value,
  onchange,
  placeholder = "",
  className,
}) => {
  return (
    <input
      {...register(name)}
      type="text"
      placeholder={placeholder}
      id={name}
      name={name}
      value={value}
      onChange={onchange}
      className={`p-2 text-[18px] h-12 w-auto border border-gray-400 rounded-md outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out shadow-lg shadow-slate-300 ${className}`}
    ></input>
  );
};

export default TextField;
