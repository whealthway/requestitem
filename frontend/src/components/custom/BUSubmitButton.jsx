import { useState } from "react";
import getBaseUrl from "../../utils/baseUrl";

const BUSubmitButton = ({ allowedBU, buttonName, disabled, onSubmit }) => {
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
          {allowedBU.map((bu, index) => {
            return (
              <div key={index}>
                <button
                  type="button"
                  onClick={() =>
                    onSubmit(
                      `${getBaseUrl()}/bbtemp-${bu.ShortDesc.toLowerCase()}/create-item-request`,
                      bu?.ShortDesc
                    )
                  }
                  className="w-full  px-4 py-2 text-gray-800 hover:bg-blue-300 text-start"
                >
                  {bu?.ShortDesc}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BUSubmitButton;
