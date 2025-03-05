import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import ItemGroup from "../../data/item_group.json";
import ProcedureItem from "./component/ProcedureItem";
import Button from "../../components/ui/Button";
import TextField from "../../components/ui/TextField";
import Label from "../../components/ui/Label";
import SearchTable from "./component/SearchTable";
import useItemRequest from "./useItemRequest";
import RadioButton from "../../components/ui/RadioButton";

const CreateRequestItem = () => {
  const controller = useItemRequest();

  const hide = false;
  const itemGroup = 1;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 hide:bg-gray-200 w-full">
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
        {controller.state.searchData.length !== 0 ? (
          <SearchTable data={controller.state.searchData} rowsPerPage={10} />
        ) : (
          ""
          // <div className="flex flex-wrap sm:col-span-2 text-red-400 text-[21px] md:col-span-3 space-x-8 space-y-2 content-center items-center">
          //   No result
          // </div>
        )}
      </div>
      {hide ? (
        ""
      ) : (
        <form
          id
          onSubmit={controller.actions.handleSubmitData}
          className="sm:col-span-2 md:col-span-3"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {itemGroup === 1 ? (
              <>
                <div className="row-span-2">
                  <div>
                    <Label labelName={"Item Group"} />
                  </div>
                  <div>
                    <select
                      className=""
                      id="itemGroupCode"
                      {...controller.form.register("itemGroupCode", {
                        required: true,
                      })}
                    >
                      {ItemGroup.ItemGroupData.map((item, index) => {
                        return (
                          <option value={item.code} key={index}>
                            {item.value}
                          </option>
                        );
                      })}
                    </select>
                    <p className="text-red-500 text-sm">
                      {controller.state.errors.itemGroupCode?.message}
                    </p>
                  </div>
                </div>
                <div className="row-span-2">
                  <div>
                    <Label labelName={"Qualimed BU"} />
                  </div>
                  <div>
                    <TextField
                      register={controller.form.register}
                      name="qualimedBu"
                    />
                    <p className="text-red-500 text-sm">
                      {controller.state.errors.qualimedBu?.message}
                    </p>
                  </div>
                </div>
                <div className="row-span-2">
                  <div>
                    <Label labelName={"BizBox Code"} />s
                  </div>
                  <div>
                    <TextField
                      register={controller.form.register}
                      name="bizboxCode"
                    />
                  </div>
                </div>
                <div className="row-span-2"></div>
                {/* Start of adding generic name and UOM */}

                <div className="m-4 sm:col-span-2 md:col-span-4 hide:bg-blue-100 p-4 border border-gray-500 rounded-md">
                  <Label labelName={"Item Details"} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 hide:bg-red-400 p-4">
                    {" "}
                    <div className="grid col-span-1 sm:col-span-2 md:col-span-4 justify-self-start p-0">
                      <Button
                        type="button"
                        className={`sm:visible invisible ${
                          controller.state.fields.length === 4
                            ? "bg-gray-600"
                            : "hover:scale-105"
                        }`}
                        onClick={controller.actions.handleAddFields}
                        disabled={
                          controller.state.fields.length === 4 ? true : false
                        }
                      >
                        {" "}
                        Add General Name and UOM
                      </Button>
                      <Button
                        type="button"
                        className={`sm:invisible visible`}
                        onClick={controller.actions.handleAddFields}
                        disabled={
                          controller.state.fields.length === 4 ? true : false
                        }
                      >
                        {" "}
                        <CiSquarePlus
                          className={`h-10 w-10 sm:hidden rounded-md ${
                            controller.state.fields.length === 4
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
                              register={controller.form.register}
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
                              register={controller.form.register}
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
                              register={controller.form.register}
                              name="unitOfMeasure1"
                            />
                          </div>
                        </div>
                        {controller.state.fields.map((_, index) => (
                          <>
                            <div className="row-span-2 font-bold text-4xl text-start content-center">
                              +
                            </div>
                            <div
                              className="row-span-2"
                              key={`genericName${index + 2}`}
                            >
                              <div>
                                <Label
                                  labelName={`Generic Name ${index + 2}`}
                                />
                              </div>
                              <div>
                                <TextField
                                  register={controller.form.register}
                                  name={`genericName${index + 2}`}
                                />
                              </div>
                            </div>
                            <div
                              className="row-span-2"
                              key={`measurement${index + 2}`}
                            >
                              <div>
                                <Label labelName={`Measurement ${index + 2}`} />
                              </div>
                              <div>
                                <TextField
                                  register={controller.form.register}
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
                                  register={controller.form.register}
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
                    <TextField
                      register={controller.form.register}
                      name="brandName"
                    />
                  </div>
                </div>
                <div className="row-span-2">
                  <div>
                    <Label labelName={"MFG"} />
                  </div>
                  <div>
                    <TextField register={controller.form.register} name="mfg" />
                  </div>
                  <p className="text-red-500 text-sm">
                    {controller.state.errors.mfg?.message}
                  </p>
                </div>
                <div className="row-span-2">
                  <div>
                    <Label labelName={"Other Descriptors"} />
                  </div>
                  <div>
                    <TextField
                      register={controller.form.register}
                      name="otherDescriptors"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="col-span-3">
                <ProcedureItem />
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-8 m-4">
            <Label labelName="Item Description:" />
            <div className="flex gap-2 item-center content-center">
              <RadioButton
                register={controller.form.register}
                handleRadioChange={controller.actions.handleRadioChange}
                itemDescription={controller.state.itemDescription}
                name="purchaseable"
                value="purchaseable"
              />
              <label htmlFor="purchaseable">Purchaseable</label>
            </div>
            <div className="flex gap-2 item-center content-center">
              <RadioButton
                register={controller.form.register}
                handleRadioChange={controller.actions.handleRadioChange}
                itemDescription={controller.state.itemDescription}
                name="sellable"
                value="sellable"
              />
              <label htmlFor="sellable">Sellable</label>
            </div>
            <div className="flex gap-2 item-center content-center">
              <RadioButton
                register={controller.form.register}
                handleRadioChange={controller.actions.handleRadioChange}
                itemDescription={controller.state.itemDescription}
                name="inventoryItem"
                value="inventoryItem"
              />
              <label htmlFor="inventoryItem">Inventory Item</label>
            </div>
          </div>
          <div className="flex col-span-4 m-4 item-center justify-end">
            <Button
              type="submit"
              buttonName={`${
                controller.state.isSaving ? "Processing..." : "Submit"
              }`}
              disabled={controller.state.isSaving}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateRequestItem;
