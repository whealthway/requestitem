import React from "react";
import { Controller } from "react-hook-form";
import { SearchTable, ConfirmationModal } from "./component";
import {
  Label,
  TextField,
  SelectField,
  Button,
  SecButton,
  RadioButton,
} from "../../components/ui";
import useItemRequest from "./useItemRequest";
import FORM_MODE from "../../constants/formPath";
import BU_BRANCH from "../../constants/buBranch";
import { BizBoxForm } from "./component/RequestForms";

const CreateRequestItem = () => {
  const controller = useItemRequest();

  if (controller.states.loading) {
    return <div>Loading...</div>;
  }

  const form = FORM_MODE.find(
    (a) => a.ItemGrpCode === controller.states.selectedItemGroup
  );
  console.log(form);
  return (
    <>
      {/* Search and Table Section */}
      <div>
        <div className="flex flex-wrap p-4 m-4 space-x-4 space-y-2 items-center">
          <Label labelName={"Search item"} />
          <input
            onChange={controller.actions.handleChange}
            className="p-2 text-[18px] h-12 w-auto border border-gray-400 rounded-md outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out shadow-lg shadow-slate-300"
          />
          <Button
            buttonName={"Search"}
            onClick={controller.actions.handleSearchItem}
            disabled={controller.states.searching}
          />
        </div>
        <div className="">
          {!controller.states.searching ? (
            controller.states.searchData.length !== 0 ? (
              <>
                <SearchTable
                  data={controller.states.searchData}
                  itemGroups={controller.states.itemGroup}
                  rowsPerPage={15}
                />
                <div className="flex flex-wrap justify-start md:justify-end items-center space-x-4 space-y-4 m-4 p-4 ">
                  <div>
                    <Label labelName="Do you want to proceed creating an item?" />
                  </div>
                  <div>
                    <SecButton
                      btnColor="bg-gray-500"
                      onClick={controller.actions.handleNotProceed}
                      buttonName="No"
                    />
                  </div>
                  <div className="">
                    <SecButton
                      onClick={controller.actions.handleYesProceed}
                      buttonName="Yes"
                      btnColor="bg-blue-400"
                    />
                  </div>
                </div>
              </>
            ) : controller.states.isSearchBtnClick ? (
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
            ) : (
              ""
            )
          ) : (
            ""
            // <div>Loading..</div>
          )}
        </div>
      </div>
      {/* End of Search and Table Section */}

      {/* Form remain hidden till the user want's to proceed */}
      {controller.states.proceed ? (
        <form
          id
          onSubmit={controller.actions.handleSubmitData}
          className="my-4 bg-slate-100 p-4 border-y-4 border-x-2 border-gray-300 rounded-xl"
        >
          <Label
            labelName={
              form?.FormName ? form.FormName + " Request Form" : "Request Form"
            }
            isTitle={true}
          />
          <hr className="border-2 border-gray-300 my-2" />
          <div>
            <div className="flex flex-wrap p-4 mx-4 my-4 gap-4 justify-start">
              <RadioButton
                handleRadioChange={controller.actions.handleRadioChange}
                requestMethod={controller.states.requestMethod}
                name="manual"
                value="manual"
              />
              <Label labelName="Manual" />
              <RadioButton
                handleRadioChange={controller.actions.handleRadioChange}
                requestMethod={controller.states.requestMethod}
                name="bizbox"
                value="bizbox"
              />
              <Label labelName="Bizbox" />
            </div>
            <div className="flex flex-wrap p-4 mx-4 my-4 gap-4 justify-start">
              {/* Defaul fields if the user want's to continue */}
              {controller.states.requestMethod === "manual" ? (
                <>
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
                </>
              ) : (
                <div className="flex flex-wrap my-4 gap-4 justify-start">
                  <div>
                    <Label labelName={"BizBox Code"} />
                  </div>
                  <div>
                    <TextField
                      register={controller.form.register}
                      name="bizboxCode"
                    />
                  </div>
                  <div className="flex items-end">
                    <Controller
                      name="buBranch"
                      defaultValue={null}
                      control={controller.form.control}
                      render={({ field }) => (
                        <SelectField
                          field={field}
                          data={BU_BRANCH}
                          code_key="code"
                          value_key="name"
                          placeholder="Search"
                          setSelectedItemGroup={
                            controller.actions.setSelectedItemGroup
                          }
                        />
                      )}
                    />
                  </div>
                </div>
              )}
            </div>
            {/* End of defaul fields if the user want's to continue */}

            {/* Subforms depending on the selected item group */}
            <div>
              {controller.states.selectedItemGroup === "" ? (
                controller.states.requestMethod === "bizbox" ? (
                  <BizBoxForm controller={controller} />
                ) : (
                  ""
                )
              ) : (
                form?.FormPath({
                  controller: controller,
                  itemNameCount: controller.states.itemNameCount,
                })
              )}
            </div>
            {/* Subforms depending on the selected item group */}
            <div className="flex justify-end">
              <div className="flex col-span-4 m-4 item-center">
                <Button
                  type="button"
                  buttonName="Cancel"
                  disabled={controller.states.isSaving}
                  onClick={controller.actions.handleOpenModal}
                  className="bg-gray-400"
                />
                <ConfirmationModal
                  isOpen={controller.states.isModalOpen}
                  onClose={controller.actions.handleCloseModal}
                  onConfirm={controller.actions.handleConfirm}
                />
              </div>
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
          </div>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default CreateRequestItem;
