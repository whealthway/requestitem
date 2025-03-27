import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import getBaseUrl from "../../utils/baseUrl";

const BUSearchButton = ({ setBUSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (bu) => {
    setBUSearch(bu);
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
              onClick={() =>
                handleClick(`${getBaseUrl()}/bizbox-masci/find-bb-code-desc`)
              }
              className="w-full  px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              MASCI
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                handleClick(`${getBaseUrl()}/bizbox-str/find-bb-code-desc`)
              }
              className="w-full px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              STR
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                handleClick(`${getBaseUrl()}/bizbox-dmmc/find-bb-code-desc`)
              }
              className="w-full px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              DMMC
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                handleClick(`${getBaseUrl()}/bizbox-sjdm/find-bb-code-desc`)
              }
              className="w-full px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              SJDM
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                handleClick(`${getBaseUrl()}/bizbox-pmvi/find-bb-code-desc`)
              }
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
