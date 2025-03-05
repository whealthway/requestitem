// src/PaginatedTable.js
import React, { useState, useEffect } from "react";

const SearchTable = ({ data, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  useEffect(() => {
    setCurrentPage(1)
  }, [data])

  return (
    <div className="w-[100%] p-4">
      <table className="w-[100%] border border-gray-300">
        <thead className="static">
          <tr className="bg-[#35314c] text-white">
            <th className="py-2 px-4 border"></th>
            <th className="py-2 px-4 border">Request By</th>
            <th className="py-2 px-4 border">BizBox Code</th>
            <th className="py-2 px-4 border">Qualimed BU</th>
            <th className="py-2 px-4 border">Item Group</th>
            <th className="py-2 px-4 border">Item Details</th>
            <th className="py-2 px-4 border">Unit of Measure</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              key={item.id}
              className={`${
                index % 2 !== 0 ? "bg-gray-100" : ""
              } text-[14px] h-16`}
            >
              <td className="py-2 px-4 border">
                {currentPage === 1 ? index + 1 : currentPage * 10 + index + 1}
              </td>
              <td className="py-2 px-4 border">{item.requested_by}</td>
              <td className="py-2 px-4 border">{item.bizbox_code}</td>
              <td className="py-2 px-4 border">{item.qm_bu}</td>
              <td className="py-2 px-4 border">{item.item_group_desc}</td>
              <td className="py-2 px-4 border">{item.item_name}</td>
              <td className="py-2 px-4 border">{item.uom_desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchTable;
