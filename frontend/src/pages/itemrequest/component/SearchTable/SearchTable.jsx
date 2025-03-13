// src/PaginatedTable.js
import React, { useState, useEffect } from "react";

const SearchTable = ({ data, itemGroups, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  console.log(itemGroups);
  return (
    <div className="w-[100%] p-4 m-4">
      <table className="w-[100%] border border-gray-300">
        <thead className="static">
          <tr className="bg-[#35314c] text-white">
            <th className="py-1 px-2 border"></th>
            <th className="py-1 px-2 border">Data Source</th>
            <th className="py-1 px-2 border">BIZBOX CODE</th>
            <th className="py-1 px-2 border">SAP CODE</th>
            <th className="py-1 px-2 border">AA CODE</th>
            <th className="py-1 px-2 border">AA ITEM MASTER CODE</th>
            <th className="py-1 px-2 border">Item Description</th>
            <th className="py-1 px-2 border">Requestor Details</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              key={index}
              className={`${index % 2 !== 0 ? "bg-gray-100" : ""} text-[14px`}
            >
              <td className="py-1 px-2 border">
                {currentPage === 1 ? index + 1 : currentPage * 10 + index + 1}
              </td>
              <td className="py-1 px-2 border">{item?.data_source}</td>
              <td className="py-1 px-2 border">{item?.bb_code}</td>
              <td className="py-1 px-2 border">{item?.sap_code}</td>
              <td className="py-1 px-2 border">{item?.aa_order_item}</td>
              <td className="py-1 px-2 border">{item?.aa_item_master}</td>
              <td className="py-1 px-2 border">{item?.description}</td>
              <td className="py-1 px-2 border">{item?.requestor_details}</td>
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
