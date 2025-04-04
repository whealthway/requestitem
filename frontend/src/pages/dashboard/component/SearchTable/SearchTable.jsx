// src/PaginatedTable.js
import React, { useState, useEffect } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import Select from "react-select";
import useSearchTable from "./useSearchTable";
import EditModal from "./components/EditModal";

const SearchTable = ({ data, buSearch, register, handleSubmitData }) => {
  const controller = useSearchTable({ data });

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  let currentData = data.slice(startIndex, startIndex + rowsPerPage);
  const optionRowsPerPage = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
  ];

  useEffect(() => {
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    currentData = data.slice(startIndex, startIndex + rowsPerPage);
  }, [data, rowsPerPage]);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: 0,
      borderRadius: "0.7rem", // Rounded corners
      borderWidth: "1px",
      borderColor: state.isFocused ? "rgb(59, 130, 246)" : "rgb(209, 213, 219)", // Focus color
      boxShadow: state.isFocused ? "0 0 5px rgba(59, 130, 246, 0.5)" : "none",
      "&:hover": {
        borderColor: "rgb(59, 130, 246)",
      },
      width: "80px",
      height: "",
    }),
  };

  const customInput = (index, itemName) => {
    return (
      <input
        className="bg-inherit w-auto h-auto"
        disabled={controller.states.editRow === index + 1}
        value={itemName}
      />
    );
  };

  return (
    <div className="w-[100%] p-8 my-2 text-[16px] text-[#67757C] bg-white rounded-md  border-2 border-l-4 border-l-red-500">
      <table className="w-[100%] border border-gray-300">
        <thead className="static">
          <tr className="bg-[#67757C] text-slate-100 font-semibold">
            <th className="py-1 px-2 border"></th>
            <th className="py-1 px-2 border">Data Source</th>
            <th className="py-1 px-2 border">BIZBOX CODE</th>
            <th className="py-1 px-2 border">SAP CODE</th>
            <th className="py-1 px-2 border">AA CODE</th>
            <th className="py-1 px-2 border">AA ITEM MASTER CODE</th>
            <th className="py-1 px-2 border">Item Description</th>
            <th className="py-1 px-2 border">Requestor Details</th>
            <th className="py-1 px-2 border">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              key={index}
              className={`${index % 2 !== 0 ? "bg-[#f2f4f8]" : "bg-white"}`}
            >
              <td className="py-1 px-2 border">
                {currentPage === 1
                  ? index + 1
                  : (currentPage - 1) * rowsPerPage + index + 1}
              </td>
              <td className="py-1 px-2 border">{item?.data_source}</td>
              <td className="py-1 px-2 border">{item?.bb_code}</td>
              <td className="py-1 px-2 border">{item?.sap_code}</td>
              <td className="py-1 px-2 border">{item?.aa_order_item}</td>
              <td className="py-1 px-2 border">{item?.aa_item_master}</td>
              <td className="py-1 px-2 border">{item?.item_description}</td>
              <td className="py-1 px-2 border">{item?.request_details}</td>
              <td className="py-1 px-2 border">{item?.status}</td>
              <td className="py-1 px-2 gap-4">
                <div className="items-center">
                  {item.data_source === "Current Request" ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          controller.actions.handleEditButton(item)
                        }
                      >
                        <FaEdit className="h-6 w-6" color="blue" />
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <div className="flex flex-wrap items-end">
          <span>
            {currentPage === 1 ? 1 : rowsPerPage * (currentPage - 1) + 1}
            {"-"}
            {currentPage * rowsPerPage < data.length
              ? currentPage * rowsPerPage
              : data.length}
            {" of"} {data.length}
          </span>
        </div>
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex flex-wrap gap-4 items-end mx-4">
            <div>
              <label>Rows per page: </label>
            </div>
            <div className="">
              <Select
                placeholder=""
                defaultValue={rowsPerPage}
                value={rowsPerPage.value}
                options={optionRowsPerPage}
                onChange={(selectedOption) => {
                  setRowsPerPage(selectedOption.value);
                }}
                styles={customStyles}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-blue-500 text-white font-semibold px-4 py-1 rounded-xl disabled:opacity-50 text-[21px]"
            >
              {"<"}
            </button>
            <span>
              <label className="font-bold">{currentPage}</label>/{totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-blue-500 text-white font-semibold px-4 py-1 rounded-xl disabled:opacity-50 text-[21px]"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      {controller.states.isOpen && controller.states.selectedData && (
        <EditModal
          onClose={controller.actions.handleEditButton}
          selectedData={controller.states.selectedData}
          handleSubmitData={handleSubmitData}
          register={register}
        />
      )}
    </div>
  );
};

export default SearchTable;
