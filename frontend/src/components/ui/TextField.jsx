import React from "react";

const TextField = ({
  register = () => {},
  name,
  value,
  setState = () => {},
  placeholder = "",
  className,
  disabled,
}) => {
  return (
    <input
      {...register(name)}
      type="text"
      placeholder={placeholder}
      id={name}
      name={name}
      value={value}
      onChange={(e) => setState(e.target.value)}
      disabled={disabled}
      className={`${className} w-72 p-2 text-[16px] text-[#495057] h-12 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out shadow-lg shadow-slate-300 ${className}`}
    ></input>
  );
};

export default TextField;
