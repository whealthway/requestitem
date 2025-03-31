import { useState } from "react";
import getBaseUrl from "../../utils/baseUrl";

const BUSubmitButton = ({ buttonName, disabled, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex gap-2 font-semibold px-4 py-2 text-[18px] h-12 w-32 text-[#d9e8f8] smooth outline-none border-gray-300 border-solid shadow-md shadow-blue-200 items-center justify-center  ${
          isOpen ? "bg-[#117a8b]" : "bg-[#028ee1]"
        }  transition rounded-lg`}
        disabled={disabled}
      >
        {buttonName}
      </button>
      {/* Dropdown */}{" "}
      {isOpen && (
        <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 mt-1 w-32 bg-white shadow-lg rounded-md border">
          <div>
            <button
              type="button"
              onClick={() =>
                onSubmit(`${getBaseUrl()}/bbtemp-masci/create-item-request`)
              }
              className="w-full  px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              MASCI
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() =>
                onSubmit(`${getBaseUrl()}/bbtemp-str/create-item-request`)
              }
              className="w-full px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              STR
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() =>
                onSubmit(`${getBaseUrl()}/bbtemp-dmmc/create-item-request`)
              }
              className="w-full px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              DMMC
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() =>
                onSubmit(`${getBaseUrl()}/bbtemp-sjdm/create-item-request`)
              }
              className="w-full px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
            >
              SJDM
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() =>
                onSubmit(`${getBaseUrl()}/bbtemp-pmvi/create-item-request`)
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

export default BUSubmitButton;
