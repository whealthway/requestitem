import React from "react";
import Label from "../../components/ui/Label";
import Button from "../../components/ui/Button";
import useDashboard from "./useDashboard";
import DashboardTable from "./dashboardtable/DashboardTable";
import DashboardGraph from "./dashboardgraph/DashboardGraph";

const Dashboard = () => {
  const controller = useDashboard();

  return (
    <div className="">
      <div className="border border-gray-300 p-8 m-4">
        <div className="text-[24px]">Dashboard</div>
        <div>
          <div className="flex flex-wrap sm:col-span-2 md:col-span-3 space-x-8 space-y-2 items-center">
            <Label labelName={"Search item"} />
            <input
              onChange={controller.actions.handleChange}
              className="text-[12px] p-[8px] h-[32px] w-[100%] md:h-[56px] md:w-[300px] md:p-[16px] md:text-[18px] lg:text-[20px] lg:p-[20px] lg:w-[400px] lg:h-[64px] outline-none border border-gray-300 shadow-lg rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"
            />
            <Button
              buttonName={"Search"}
              onClick={controller.actions.handleSearchItem}
            />
          </div>
          <div className="sm:col-span-2 md:col-span-3">
            {controller.state.allItems.length !== 0 ? (
              <DashboardTable
                data={controller.state.allItems}
                rowsPerPage={10}
              />
            ) : (
              <div className="flex flex-wrap sm:col-span-2 text-red-400 text-[21px] md:col-span-3 space-x-8 space-y-2 content-center items-center">
                No result
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border border-gray-300 p-8 m-4">
        {/* GRAPH */}
        <div className="text-[24px]">Graph</div>
        <div>
          <DashboardGraph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
