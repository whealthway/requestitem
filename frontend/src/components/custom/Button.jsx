import React from "react";

const Button = ({ button_name, children }) => {
  return (
    <button
      onClick={() => {}} // add function pointed to API
      className="h-6 sm:h-7 md:h-8 w-32 sm:w-40 md:w-50 bg-[#1976d2] text-[#d9e8f8] outline-none border-solid shadow-md shadow-gray-500 rounded-md hover:scale-100 items-center"
    >
      {button_name}
      {/* {children} */}
    </button>
  );
};

export default Button;
