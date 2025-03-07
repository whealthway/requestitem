import React from "react";
import useItemRequest from "./useItemRequest";
import { Controller } from "react-hook-form";
import {
  SearchTable,
  ItemForm,
  ProcedureForm,
  ConfirmationModal,
} from "./component";
import {
  Label,
  TextField,
  SelectField,
  Button,
  SecButton,
} from "../../components/ui";

const CreateRequestItem = () => {
  const controller = useItemRequest();

  if (controller.states.loading) {
    return <div>Loading...</div>;
  }

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
            disabled={false}
          />
        </div>
        <div className="">
          {!controller.states.searching ? (
            controller.states.searchData.length !== 0 ? (
              <>
                <SearchTable
                  data={controller.states.searchData}
                  rowsPerPage={10}
                />
                <div className="flex flex-wrap justify-start md:justify-end items-center space-x-4 space-y-4 m-4 p-4 ">
                  <div>
                    <Label labelName="Do you want to proceed creating an item?" />
                  </div>
                  <div className="">
                    <SecButton
                      onClick={controller.actions.handleYesProceed}
                      buttonName="Yes"
                      btnColor="bg-blue-400"
                    />
                  </div>
                  <div>
                    <SecButton
                      btnColor="bg-gray-500"
                      onClick={controller.actions.handleNotProceed}
                      buttonName="No"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-wrap justify-start md:justify-center items-center space-x-4 space-y-4 m-4 p-4 ">
                  <p className="text-red-500 font-semibold text-[21px]">
                    No data found!
                  </p>
                </div>
                <div className="flex flex-wrap justify-start md:justify-end items-center space-x-4 space-y-4 m-4 p-4 ">
                  <div className="">
                    <SecButton
                      onClick={controller.actions.handleYesProceed}
                      buttonName="Create Item Request"
                      btnColor="bg-blue-400"
                    />
                  </div>
                </div>
              </>
            )
          ) : (
            ""
          )}
        </div>
      </div>
      {/* End of Search and Table Section */}

      {/* Form remain hidden till the user want's to proceed */}
      {controller.states.proceed ? (
        <form
          id
          onSubmit={controller.actions.handleSubmitData}
          className="my-16 bg-slate-100 p-8 border-y-4 border-x-2 border-gray-300 rounded-xl"
        >
          <Label labelName="Item Request Form" isTitle={true} />
          <hr className="border-2 border-gray-300 my-2" />
          <div>
            {/* Defaul fields if the user want's to continue */}
            <div className="flex flex-wrap p-4 mx-4 my-8 gap-4 justify-between">
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
                  <Label labelName={"Department"} />
                </div>
                <div>
                  <TextField
                    register={controller.form.register}
                    name="department"
                  />
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
                <ProcedureForm controller={controller} />
              )}
            </div>
            {/* Subforms depending on the selected item group */}

            <div className="flex col-span-4 m-4 item-center justify-end">
              <Button
                type="button"
                buttonName={`${
                  controller.states.isSaving ? "Processing..." : "Submit"
                }`}
                disabled={controller.states.isSaving}
                onClick={controller.actions.handleOpenModal}
              />
              <ConfirmationModal
                isOpen={controller.states.isModalOpen}
                onClose={controller.actions.handleCloseModal}
                onConfirm={controller.actions.handleConfirm}
              />
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default CreateRequestItem;
