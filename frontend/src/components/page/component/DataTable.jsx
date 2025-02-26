// src/PaginatedTable.js
import React, { useState } from "react";

const SearchTable = ({ data, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="container w-full p-4">
      <table className="min-w-full border border-gray-300">
        <thead className="static">
          <tr>
            <th className="py-2 px-4 border-b"></th>
            <th className="py-2 px-4 border-b">Request By</th>
            <th className="py-2 px-4 border-b">BizBox Code</th>
            <th className="py-2 px-4 border-b">Qualimed BU</th>
            <th className="py-2 px-4 border-b">Item Group</th>
            <th className="py-2 px-4 border-b">Item Details</th>
            <th className="py-2 px-4 border-b">Unit of Measure</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">
                {currentPage == 1 ? index + 1 : currentPage * 10 + index + 1}
              </td>
              <td className="py-2 px-4 border-b">{item.requested_by}</td>
              <td className="py-2 px-4 border-b">{item.bizbox_code}</td>
              <td className="py-2 px-4 border-b">{item.qm_bu}</td>
              <td className="py-2 px-4 border-b">{item.item_group_desc}</td>
              <td className="py-2 px-4 border-b">{item.item_name}</td>
              <td className="py-2 px-4 border-b">{item.uom_desc}</td>
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
