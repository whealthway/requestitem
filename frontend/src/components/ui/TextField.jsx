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
      className={`${
        value ? "bg-gray-500" : ""
      }p-2 text-[21px] h-11 w-80 border border-gray-400 rounded-md outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out shadow-lg shadow-slate-300`}
    ></input>
  );
};

export default TextField;
