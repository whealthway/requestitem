import React from "react";
import { HiUserCircle } from "react-icons/hi2";

const Header = () => {
  return (
  <div className="flex h-24 w-full bg-[#174980] text-white justify-between p-4 items-center">
    <p className="text-[30px]">ItemRequest</p>
    <HiUserCircle className="flex w-20 h-20"/>
  </div>
  )
};

export default Header;
