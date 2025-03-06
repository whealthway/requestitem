import React from "react";
import ProcedureItem from "./component/ProcedureItem";
import Button from "../../components/ui/Button";
import Label from "../../components/ui/Label";
import SearchTable from "./component/SearchTable";
import useItemRequest from "./useItemRequest";
import ItemForm from "./component/ItemForm";
import { Controller } from "react-hook-form";
import SelectField from "../../components/ui/SelectField";
import TextField from "../../components/ui/TextField";

const CreateRequestItem = () => {
  const controller = useItemRequest();

  if (controller.states.loading) {
    return <div>Loading...</div>;
  }

  const proceed = true;

  return (
    <>
      {/* Search and Table Section */}
      <div>
        <div className="flex flex-wrap p-4 m-4 space-x-4 space-y-2 items-center">
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
        <div className="">
          {controller.states.searchData.length !== 0 ? (
            controller.states.isSearching ? (
              <SearchTable
                data={controller.states.searchData}
                rowsPerPage={10}
              />
            ) : (
              <div> Loading... </div>
            )
          ) : (
            ""
          )}
          {controller.states.doneSearching ? (
            <div className="flex flex-wrap justify-start md:justify-end items-center space-x-4 space-y-4 m-4 p-4 ">
              <div>
                <Label labelName="Do you want to proceed creating an item?" />
              </div>
              <div className="">
                <Button
                  onClick={controller.actions.handleYesProceed}
                  buttonName="Yes"
                />
              </div>
              <div>
                <Button
                  onClick={controller.actions.handleNotProceed}
                  buttonName="No"
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* End of Search and Table Section */}

      {/* Form remain hidden till the user want's to proceed */}
      <form
        id
        onSubmit={controller.actions.handleSubmitData}
        className="sm:col-span-2 md:col-span-3"
      >
        {controller.states.proceed ? (
          <div>
            {/* Defaul fields if the user want's to continue */}
            <div className="flex flex-wrap p-4 m-4 space-x-4 space-y-2 justify-between">
              <div>
                <div>
                  <Label labelName={"Item Group"} />
                </div>
                <div>
                  <Controller
                    name="itemGroupCode"
                    defaultValue={null}
                    control={controller.form.control}
                    render={({ field }) => (
                      <SelectField
                        field={field}
                        data={controller.states.itemGroup}
                        code_key="ItemGrpCode"
                        value_key="ItemGrpName"
                        placeholder="Select Item Group"
                        setSelectedItemGroup={
                          controller.actions.setSelectedItemGroup
                        }
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <div>
                  <Label labelName={"Qualimed BU"} />
                </div>
                <div>
                  <TextField
                    register={controller.form.register}
                    name="qualimedBu"
                  />
                  {/* <p className="text-red-500 text-sm">
                      {controller.states.errors.qualimedBu?.message}
                    </p> */}
                </div>
              </div>
              <div>
                <div>
                  <Label labelName={"BizBox Code"} />
                </div>
                <div>
                  <TextField
                    register={controller.form.register}
                    name="bizboxCode"
                  />
                </div>
              </div>
            </div>
            {/* End of defaul fields if the user want's to continue */}

            {/* Subforms depending on the selected item group */}
            <div>
              {controller.states.selectedItemGroup === "" ? (
                ""
              ) : controller.states.selectedItemGroup !== "116" ? (
                <ItemForm controller={controller} />
              ) : (
                <ProcedureItem />
              )}
            </div>
            {/* Subforms depending on the selected item group */}

            <div className="flex col-span-4 m-4 item-center justify-end">
              <Button
                type="submit"
                buttonName={`${
                  controller.states.isSaving ? "Processing..." : "Submit"
                }`}
                disabled={controller.states.isSaving}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default CreateRequestItem;
