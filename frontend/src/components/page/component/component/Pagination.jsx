import React, { useState } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [inputValue, setInputValue] = useState(currentPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      setInputValue(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        className="px-4 py-2 bg-gray-300 rounded"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <input
        type="number"
        className="w-16 text-center border rounded"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        onBlur={() => handlePageChange(inputValue)}
      />
      <button
        className="px-4 py-2 bg-gray-300 rounded"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
