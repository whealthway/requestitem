import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import ItemGroup from "../../data/item_group.json";
import ProcedureItem from "./component/ProcedureItem";
import Button from "../ui/Button";
import TextField from "../ui/TextField";
import Label from "../ui/Label";
import SampleData from "../../data/sample_data.json";
import SearchTable from "./component/DataTable";

const CreateRequestItem = () => {
  const [fields, setFields] = useState([]);

  const handleAddFields = () => {
    setFields([...fields, { field1: "", field2: "", field3: "" }]);
  };

  const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    // Add more data as needed
  ];

  const itemGroup = 1;
  const hide = false;
  const result_data = 10;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 hide:bg-gray-200 w-full">
      <div className="flex flex-wrap sm:col-span-2 md:col-span-3 space-x-8 space-y-2 items-center">
        {/* <label>Search Item</label> */}
        <Label labelName={"Search item"} />
        {/* <input
          className="border border-gray-400 outline-none shadow-lg rounded-md"
          type="text"
        /> */}
        <TextField />
        <Button buttonName={"Search"} />
        {/* <button>Search</button> */}
      </div>
      <div className="col-span-3">
        {result_data && <SearchTable data={SampleData.data} rowsPerPage={10} />}
      </div>
      {hide ? (
        ""
      ) : (
        <>
          <div className="row-span-2">
            <div>
              {/* <label>Item Group</label> */}
              <Label labelName={"Item Group"} />
            </div>
            <div>
              <select className="">
                {ItemGroup.ItemGroupData.map((item, index) => {
                  return <option>{item.value}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="row-span-2">
            <div>
              {/* <label>Qualimed BU</label> */}
              <Label labelName={"Qualimed BU"} />
            </div>
            <div>
              {/* <input
                className="border border-gray-300 outline-none shadow-lg rounded-md"
                type="text"
              /> */}
              <TextField />
            </div>
          </div>
          <div className="row-span-2">
            <div>
              {/* <label>BizBox Code</label> */}
              <Label labelName={"BizBox Code"} />
            </div>
            <div>
              {/* <input
                className="border border-gray-300 outline-none shadow-lg rounded-md"
                type="text"
              /> */}
              <TextField />
            </div>
          </div>
          {/* Start of adding generic name and UOM */}
          {itemGroup == 1 ? (
            <>
              <div className="sm:col-span-2 md:col-span-3 hide:bg-blue-100 p-4 border border-gray-500 rounded-md">
                {/* <label>Item Name</label> */}
                <Label labelName={"Item Details"} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 hide:bg-red-400 p-4">
                  {" "}
                  {/*place-content-start place-items-cente*/}
                  <div className="grid col-span-3 justify-self-start p-0">
                    <Button
                      className={`sm:visible invisible ${
                        fields.length == 4 ? "bg-gray-600" : "hover:scale-105"
                      }`}
                      onClick={handleAddFields}
                      disabled={fields.length == 4 ? true : false}
                    >
                      {" "}
                      Add General Name and UOM
                    </Button>
                    <Button
                      className={`sm:invisible visible`}
                      onClick={handleAddFields}
                      disabled={fields.length == 4 ? true : false}
                    >
                      {" "}
                      <CiSquarePlus
                        className={`h-10 w-10 sm:hidden rounded-md ${
                          fields.length == 4
                            ? "bg-gray-400 hover:disabled:transition-none"
                            : "hover:scale-105"
                        }`}
                      />
                    </Button>
                  </div>
                  <div className="sm:col-span-2 md:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 hide:bg-slate-500 p-4">
                      <div className="row-span-2">
                        <div>
                          {/* <label htmlFor="">Generic Name</label> */}
                          <Label labelName={"Generic Name"} />
                        </div>
                        <div>
                          {/* <input
                            className="border border-gray-300 outline-none shadow-lg rounded-md"
                            type="text"
                          /> */}
                          <TextField />
                        </div>
                      </div>
                      <div className="row-span-2">
                        <div>
                          {/* <label htmlFor="">Measurement</label> */}
                          <Label labelName={"Measurement"} />
                        </div>
                        <div>
                          {/* <input
                            className="border border-gray-300 outline-none shadow-lg rounded-md"
                            type="text"
                          /> */}
                          <TextField />
                        </div>
                      </div>
                      <div className="row-span-2">
                        <div>
                          {/* <label htmlFor="">Unit of Measures</label> */}
                          <Label labelName={"Unit of Measure"} />
                        </div>
                        <div>
                          {/* <input
                            className="border border-gray-300 outline-none shadow-lg rounded-md"
                            type="text"
                          /> */}
                          <TextField />
                        </div>
                      </div>
                      {/* <div className="row-span-2">
                        <div>
                          <label htmlFor="" className="font-bold text-4xl">
                            +
                          </label>
                        </div>
                      </div> */}
                      {fields.map((_, index) => (
                        <>
                          <div className="row-span-2" key={index}>
                            <div>
                              {/* <label htmlFor="">Generic Name</label> */}
                              <Label labelName={"Generic Name"} />
                            </div>
                            <div>
                              {/* <input
                                className="border border-gray-300 outline-none shadow-lg rounded-md"
                                type="text"
                                placeholder="Field 1"
                              /> */}
                              <TextField />
                            </div>
                          </div>
                          <div className="row-span-2" key={index}>
                            <div>
                              {/* <label htmlFor="">Measurements</label> */}
                              <Label labelName={"Measurement"} />
                            </div>
                            <div>
                              {/* <input
                                className="border border-gray-300 outline-none shadow-lg rounded-md"
                                type="text"
                                placeholder="Field 1"
                              /> */}
                              <TextField />
                            </div>
                          </div>
                          <div className="row-span-2" key={index}>
                            <div>
                              {/* <label htmlFor="">Unit of Measures</label> */}
                              <Label labelName={"Unit of Measure"} />
                            </div>
                            <div>
                              {/* <input
                                className="border border-gray-300 outline-none shadow-lg rounded-md"
                                type="text"
                                placeholder="Field 1"
                              /> */}
                              <TextField />
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-span-2">
                <div>
                  {/* <label htmlFor="">Brand Name</label> */}
                  <Label labelName={"Brand Name"} />
                </div>
                <div>
                  {/* <input
                    className="border border-gray-300 outline-none shadow-lg rounded-md"
                    type="text"
                  /> */}
                  <TextField />
                </div>
              </div>
              <div className="row-span-2">
                <div>
                  {/* <label htmlFor="">MFG</label> */}
                  <Label labelName={"MFG"} />
                </div>
                <div>
                  {/* <input
                    className="border border-gray-300 outline-none shadow-lg rounded-md"
                    type="text"
                  /> */}
                  <TextField />
                </div>
              </div>
              <div className="row-span-2">
                <div>
                  {/* <label htmlFor="">Other Descriptors</label> */}
                  <Label labelName={"Other Descriptors"} />
                </div>
                <div>
                  {/* <input
                    className="border border-gray-300 outline-none shadow-lg rounded-md"
                    type="text"
                  /> */}
                  <TextField />
                </div>
              </div>
            </>
          ) : (
            <div className="col-span-3">
              <ProcedureItem />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CreateRequestItem;
