import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import {
  SEARCH_BIZBOX_API,
  SEARCH_CURRENT_REQUEST_API,
} from "../../utils/endPoint";

const BUSearchButton = ({ allowedBU, setBUSearch, isBizbox = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const handleClick = (bu) => {
    console.log(bu);
    setBUSearch({
      api: isBizbox
        ? SEARCH_BIZBOX_API[bu]
        : SEARCH_CURRENT_REQUEST_API["masci"],
      bu: bu,
    });
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsOpen(false); // Hide button
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Button */}
      <button
        ref={buttonRef}
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
      <div className="absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-md border">
        {isOpen &&
          allowedBU.map((bu, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => handleClick(bu?.ShortDesc.toLowerCase())}
                  className="w-full  px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
                >
                  {bu?.ShortDesc}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BUSearchButton;
