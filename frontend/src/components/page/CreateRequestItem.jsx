import React, { useState } from "react";
import Label from "../custom/Label";
import Button from "../custom/Button";
import TestAddField from "./TestAddField";
import GridContainer from "../custom/GridContainer";
import { CiSquarePlus } from "react-icons/ci";
import ItemGroup from "../../data/item_group.json";
import ProcedureItem from "./component/ProcedureItem";
import TextField from "../custom/TextField";

const CreateRequestItem = () => {
  const [fields, setFields] = useState([]);

  const handleAddFields = () => {
    setFields([...fields, { field1: "", field2: "", field3: "" }]);
  };

  const itemGroup = 1;
  const hide = false;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 hide:bg-gray-200 w-full">
      <div className="sm:col-span-2 md:col-span-3 space-x-2 space-y-1">
        <label>Search Item</label>
        <input
          className="border border-gray-400 outline-none shadow-lg rounded-md"
          type="text"
        />
        <button>Search</button>
      </div>
      {hide ? (
        ""
      ) : (
        <>
          <div className="row-span-2">
            <div>
              <label>Item Group</label>
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
              <label>Qualimed BU</label>
            </div>
            <div>
              <input
                className="border border-gray-300 outline-none shadow-lg rounded-md"
                type="text"
              />
            </div>
          </div>
          <div className="row-span-2"></div>
          {/* Start of adding generic name and UOM */}
          {itemGroup == 1 ? (
            <>
              <div className="sm:col-span-2 md:col-span-3 hide:bg-blue-100 p-4 border border-gray-500 rounded-md">
                <label>Item Name</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 hide:bg-red-400 p-4">
                  {" "}
                  {/*place-content-start place-items-cente*/}
                  <div className="col-span-3">
                    <button
                      className="sm:visible invisible"
                      onClick={handleAddFields}
                      disabled={fields.length == 4 ? true : false}
                    >
                      {" "}
                      Add General Name and UOM
                    </button>
                    <button
                      className="sm:invisible visible"
                      onClick={handleAddFields}
                      disabled={fields.length == 4 ? true : false}
                    >
                      {" "}
                      <CiSquarePlus className="h-6 w-6 sm:hidden" />
                    </button>
                  </div>
                  <div className="sm:col-span-2 md:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 hide:bg-slate-500 p-4">
                      <div className="row-span-2">
                        <div>
                          <label htmlFor="">Generic Name</label>
                        </div>
                        <div>
                          <input
                            className="border border-gray-300 outline-none shadow-lg rounded-md"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="row-span-2">
                        <div>
                          <label htmlFor="">Measurement</label>
                        </div>
                        <div>
                          <input
                            className="border border-gray-300 outline-none shadow-lg rounded-md"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="row-span-2">
                        <div>
                          <label htmlFor="">Unit of Measures</label>
                        </div>
                        <div>
                          <input
                            className="border border-gray-300 outline-none shadow-lg rounded-md"
                            type="text"
                          />
                        </div>
                      </div>
                      {fields.map((_, index) => (
                        <>
                          <div className="row-span-2" key={index}>
                            <div>
                              <label htmlFor="">Generic Name</label>
                            </div>
                            <div>
                              <input
                                className="border border-gray-300 outline-none shadow-lg rounded-md"
                                type="text"
                                placeholder="Field 1"
                              />
                            </div>
                          </div>
                          <div className="row-span-2" key={index}>
                            <div>
                              <label htmlFor="">Measurements</label>
                            </div>
                            <div>
                              <input
                                className="border border-gray-300 outline-none shadow-lg rounded-md"
                                type="text"
                                placeholder="Field 1"
                              />
                            </div>
                          </div>
                          <div className="row-span-2" key={index}>
                            <div>
                              <label htmlFor="">Unit of Measures</label>
                            </div>
                            <div>
                              <input
                                className="border border-gray-300 outline-none shadow-lg rounded-md"
                                type="text"
                                placeholder="Field 1"
                              />
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
                  <label htmlFor="">Brand Name</label>
                </div>
                <div>
                  <input
                    className="border border-gray-300 outline-none shadow-lg rounded-md"
                    type="text"
                  />
                </div>
              </div>
              <div className="row-span-2">
                <div>
                  <label htmlFor="">MFG</label>
                </div>
                <div>
                  <input
                    className="border border-gray-300 outline-none shadow-lg rounded-md"
                    type="text"
                  />
                </div>
              </div>
              <div className="row-span-2">
                <div>
                  <label htmlFor="">Other Descriptors</label>
                </div>
                <div>
                  <input
                    className="border border-gray-300 outline-none shadow-lg rounded-md"
                    type="text"
                  />
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
