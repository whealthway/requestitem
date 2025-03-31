import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  SEARCH_BIZBOX_API,
  SEARCH_CURRENT_REQUEST_API,
} from "../../utils/endPoint";

const BUSearchButton = ({ setBUSearch, isBizbox = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (bu) => {
    setBUSearch(
      isBizbox ? SEARCH_BIZBOX_API[bu] : SEARCH_CURRENT_REQUEST_API[bu]
    );
    setIsOpen(false);
  };
  return (
    <div className="relative">
      {/* Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex gap-2 font-semibold px-4 py-2 text-[18px] h-12 w-32 text-[#d9e8f8] smooth outline-none border-gray-300 border-solid shadow-md shadow-blue-200 items-center justify-center  ${
          isOpen ? "bg-[#117a8b]" : "bg-[#028ee1]"
        }  transition rounded-r-lg`}
      >
        <FaSearch className="w-4 h-4" />
        Search
      </button>
      {/* Dropdown */}{" "}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-md border">
          <div>
            <button
              onClick={() => handleClick("masci")}
              className="w-full  px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              MASCI
            </button>
          </div>
          <div>
            <button
              onClick={() => handleClick("str")}
              className="w-full px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              STR
            </button>
          </div>
          <div>
            <button
              onClick={() => handleClick("dmmc")}
              className="w-full px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              DMMC
            </button>
          </div>
          <div>
            <button
              onClick={() => handleClick("sjdm")}
              className="w-full px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              SJDM
            </button>
          </div>
          <div>
            <button
              onClick={() => handleClick("pmvi")}
              className="w-full px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              PMVI
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BUSearchButton;
