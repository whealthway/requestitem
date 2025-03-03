import React, { useState, useEffect } from "react";
import { CiSquarePlus } from "react-icons/ci";
import ItemGroup from "../../data/item_group.json";
import ProcedureItem from "./component/ProcedureItem";
import Button from "../../components/ui/Button";
import TextField from "../../components/ui/TextField";
import Label from "../../components/ui/Label";
import SampleData from "../../data/sample_data.json";
import SearchTable from "./component/DataTable";
import axios from "axios";
import { useForm } from "react-hook-form";
// import RadioButton from "../../components/ui/RadioButton";

const CreateRequestItem = () => {
  const [fields, setFields] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchItem, setSearchItem] = useState({
    "searchItem": ""
  });
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState(null)
  const { register, handleSubmit } = useForm();
  const [itemRequestData, setItemRequestData] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    setSearchItem({
      "searchItem": e.target.value
    });
  };

  const handleAddFields = () => {
    setFields([...fields, { field1: "", field2: "", field3: "" }]);
  };

  const handleSubmitData = handleSubmit(async (data) => {
    try {
      await setItemRequestData(JSON.stringify(data));
      setIsSaving(true);
    } catch (error) {
      console.log(error);
    }
  });

  const handleSearchItem = async() => {
    try{
      const response = await axios.post("http://127.0.0.1:5000/items/search", searchItem)
      console.log('Response:', response.data);
      setSearchData(response.data.data)
      setIsSearching(true)
    } catch(error) {
      setError(error)
    }
    finally {
      setIsSearching(false)
    }
  }
  useEffect(() => {
    // console.log(itemRequestData);
    console.log(searchData)
  }, [itemRequestData, searchData]);

  // const handelSubmitData = async handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // const response = await axios.post(
  //     //   "https://your-backend-endpoint.com/api/data",
  //     //   itemRequestData
  //     // );
  //     // console.log("Data sent successfully:", response.data);
  //     setItemRequestData(JSON.stringify(itemRequestData));
  //     console.log(itemRequestData);
  //   } catch (error) {
  //     console.error("Error sending data:", error);
  //   }
  // };


  const itemGroup = 1;
  const hide = false;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 hide:bg-gray-200 w-full">
      <div className="flex flex-wrap sm:col-span-2 md:col-span-3 space-x-8 space-y-2 items-center">
        <Label labelName={"Search item"} />
        <input
          onChange = {handleChange}
         className="text-[12px] p-[8px] h-[32px] w-[100%] md:h-[56px] md:w-[300px] md:p-[16px] md:text-[18px] lg:text-[20px] lg:p-[20px] lg:w-[400px] lg:h-[64px] outline-none border border-gray-300 shadow-lg rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out" />
        <Button buttonName={"Search"} onClick={handleSearchItem} />
      </div>
      <div className="sm:col-span-2 md:col-span-3">
        {searchData.length !== 0 ? (
          <SearchTable data={searchData} rowsPerPage={10} />
        ) : (
        <div className="flex flex-wrap sm:col-span-2 text-red-400 text-[21px] md:col-span-3 space-x-8 space-y-2 content-center items-center">
            No result
          </div>
        )}
      </div>
      {hide ? (
        ""
      ) : (
        <form
          onSubmit={handleSubmitData}
          className="sm:col-span-2 md:col-span-3"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className="row-span-2">
              <div>
                {/* <label>Item Group</label> */}
                <Label labelName={"Item Group"} />
              </div>
              <div>
                <select className="">
                  {ItemGroup.ItemGroupData.map((item, index) => {
                    return <option key={index}>{item.value}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="row-span-2">
              <div>
                <Label labelName={"Qualimed BU"} />
              </div>
              <div>
                <TextField register={register} name="qualimedBu" />
              </div>
            </div>
            <div className="row-span-2">
              <div>
                <Label labelName={"BizBox Code"} />s
              </div>
              <div>
                <TextField register={register} name="bizboxCode" />
              </div>
            </div>
            <div className="row-span-2"></div>
            {/* Start of adding generic name and UOM */}
            {itemGroup === 1 ? (
              <>
                <div className="m-4 sm:col-span-2 md:col-span-4 hide:bg-blue-100 p-4 border border-gray-500 rounded-md">
                  <Label labelName={"Item Details"} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 hide:bg-red-400 p-4">
                    {" "}
                    <div className="grid col-span-1 sm:col-span-2 md:col-span-4 justify-self-start p-0">
                      <Button
                        type="button"
                        className={`sm:visible invisible ${
                          fields.length === 4
                            ? "bg-gray-600"
                            : "hover:scale-105"
                        }`}
                        onClick={handleAddFields}
                        disabled={fields.length === 4 ? true : false}
                      >
                        {" "}
                        Add General Name and UOM
                      </Button>
                      <Button
                        type="button"
                        className={`sm:invisible visible`}
                        onClick={handleAddFields}
                        disabled={fields.length === 4 ? true : false}
                      >
                        {" "}
                        <CiSquarePlus
                          className={`h-10 w-10 sm:hidden rounded-md ${
                            fields.length === 4
                              ? "bg-gray-400 hover:disabled:transition-none"
                              : "hover:scale-105"
                          }`}
                        />
                      </Button>
                    </div>
                    <div className="col-span-1 sm:col-span-2 md:col-span-4">
                      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 hide:bg-slate-500 p-4">
                        <div className="row-span-2" key="genericName1">
                          <div>
                            <Label labelName="Generic Name 1" />
                          </div>
                          <div>
                            <TextField
                              register={register}
                              name="genericName1"
                            />
                          </div>
                        </div>
                        <div className="row-span-2" key="measurement1">
                          <div>
                            <Label labelName="Measurement 1" />
                          </div>
                          <div>
                            <TextField
                              register={register}
                              name="measurement1"
                            />
                          </div>
                        </div>
                        <div className="row-span-2" key="uom1">
                          <div>
                            <Label labelName="Unit of Measure 1" />
                          </div>
                          <div>
                            <TextField
                              register={register}
                              name="uniOfMeasure1"
                            />
                          </div>
                        </div>
                        {fields.map((_, index) => (
                          <>
                            <div className="row-span-2 font-bold text-4xl text-start content-center">
                              +
                            </div>
                            <div className="row-span-2" key={`genericName${index + 2}`}>
                              <div>
                                <Label
                                  labelName={`Generic Name ${index + 2}`}
                                />
                              </div>
                              <div>
                                <TextField
                                  register={register}
                                  name={`genericName${index + 2}`}
                                />
                              </div>
                            </div>
                            <div className="row-span-2" key={`measurement${index + 2}`}>
                              <div>
                                <Label labelName={`Measurement ${index + 2}`} />
                              </div>
                              <div>
                                <TextField
                                  register={register}
                                  name={`measurement${index + 2}`}
                                />
                              </div>
                            </div>
                            <div className="row-span-2" key={`uom${index + 2}`}>
                              <div>
                                <Label
                                  labelName={`Unit of Measure ${index + 2}`}
                                />
                              </div>
                              <div>
                                <TextField
                                  register={register}
                                  name={`unitOfMeasure${index + 2}`}
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
                    <Label labelName={"Brand Name"} />
                  </div>
                  <div>
                    <TextField register={register} name="brandName" />
                  </div>
                </div>
                <div className="row-span-2">
                  <div>
                    <Label labelName={"MFG"} />
                  </div>
                  <div>
                    <TextField register={register} name="mfg" />
                  </div>
                </div>
                <div className="row-span-2">
                  <div>
                    <Label labelName={"Other Descriptors"} />
                  </div>
                  <div>
                    <TextField register={register} name="otherDescriptors" />
                  </div>
                </div>
              </>
            ) : (
              <div className="col-span-3">
                <ProcedureItem />
              </div>
            )}
            {/* <div>
              <div>
                <RadioButton />
              </div>
            </div> */}
          </div>
          <div className="col-span-4 m-4">
            {/* {itemRequestData} */}
            <Button
              type="submit"
              buttonName={`${isSaving ? "Processing..." : "Submit"}`}
              disabled={isSaving}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateRequestItem;
