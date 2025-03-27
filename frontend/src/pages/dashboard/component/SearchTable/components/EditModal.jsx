import React, { useEffect, useState } from "react";

const EditModal = ({ selectedData, onClose, handleSubmitData, register }) => {
  console.log("DATA: " + JSON.stringify(selectedData));
  const [disable, setDisable] = useState(true);

  useEffect(() => {});
  return (
    <>
      {/* <button
        onClick={editModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Toggle modal
      </button> */}

      <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-sm dark:bg-gray-700">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Edit Item Request
            </h3>
            <button
              type="button"
              onClick={() => onClose({})}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <form className="p-4">
            <div className="grid gap-4 mb-4 grid-cols-1">
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Item Code
                </label>
                <input
                  {...register("itemCode")}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  value={selectedData?.sap_code}
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Item Description
                </label>
                <textarea
                  {...register("itemDescription")}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  defaultValue={selectedData?.item_description}
                ></textarea>
              </div>
              <input
                {...register("itemId")}
                type="text"
                value={selectedData?.id}
                hidden
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={handleSubmitData}
            >
              Update item Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditModal;
