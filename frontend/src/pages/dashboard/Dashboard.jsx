import React from "react";
import useItemRequest from "./useDashboard";

import SearchTable from "./component/SearchTable";
import BURequestSearchButton from "../../components/custom/BURequestSearchButton";

const Dashboard = () => {
  const controller = useItemRequest();

  if (controller.states.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-fit p-8 bg-white border-2 border-[#dfdfdf] border-l-4 border-l-red-600 rounded-md">
        <div className="flex justify-start my-1">
          <label className=" text-[#455A64]  text-[18px]">
            SAP AA BB Search{" "}
            <label className="text-red-500 font-semibold">*</label>
          </label>
        </div>
        <div className="flex items-center">
          <input
            onChange={(e) =>
              controller.actions.setSearchItem(e.target.value.trim())
            }
            className="p-2 text-[18px] h-12 w-96 border border-gray-300 rounded-l-md outline-none focus:ring-4 focus:ring-[#cadeff] transition duration-200 ease-in-out"
          />

          <BURequestSearchButton
            setBUSearch={controller.actions.setBuSearch}
            setBuSubmit={controller.actions.setBuSubmit}
            // onSearch={controller.actions.handleSearchItem}
          />
        </div>
        {controller.states.showError && (
          <p role="alert" className="text-red-500 text-[14px] font-semibold">
            Required
          </p>
        )}
      </div>

      <div className="">
        {controller.states.searchData.length !== 0 ? (
          <>
            <SearchTable
              data={controller.states.searchData}
              itemGroups={controller.states.buSearch}
              rowsPerPage={15}
              handleSubmitData={controller.actions.handleSubmitData}
              register={controller.form.register}
            />
          </>
        ) : (
          !controller.states.hasData && (
            <>
              <div className="flex flex-wrap justify-start md:justify-center items-center my-2 ">
                <p className="text-red-500 font-semibold text-[18px]">
                  No data found!
                </p>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
};

export default Dashboard;
