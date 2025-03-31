import React, { useState, useEffect, useRef } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";

const Tooltip = ({ toolTipContent }) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef(null);

  // Close tooltip when clicking outside
  useEffect(() => {
    // const handleClickOutside = (event) => {
    //   if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
    //     setVisible(false);
    //   }
    // };
    // document.addEventListener("mousedown", handleClickOutside);
    // return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={tooltipRef}>
      <button
        onClick={() => setVisible(!visible)}
        className="focus:outline-none"
        type="button"
      >
        <FaRegQuestionCircle className="text-blue-500 h-5 w-5" />
      </button>

      {visible && (
        <div
          className="absolute bg-white bottom-full left-1/2 -translate-x-1/2 mb-2 font-semibold min-w-[150px] max-w-xs sm:max-w-sm px-3 py-2 text-[11px] text-blue-500 rounded-lg shadow-lg z-50"
          role="tooltip"
        >
          {toolTipContent}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
