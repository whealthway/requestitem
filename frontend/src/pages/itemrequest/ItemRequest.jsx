import React from "react";
import { Controller } from "react-hook-form";
import { SearchTable, ConfirmationModal } from "./component";
import {
  Label,
  SelectField,
  Button,
  SecButton,
  RadioButton,
} from "../../components/ui";
import useItemRequest from "./useItemRequest";
import FORM_MODE from "../../constants/formPath";
import { BizBoxForm } from "./component/RequestForms";
import { FaSearch } from "react-icons/fa";
import Loading from "../../components/custom/Loading";

const CreateRequestItem = () => {
  const controller = useItemRequest();

  if (controller.states.loading) {
    return <div>Loading...</div>;
  }

  const form = FORM_MODE.find(
    (a) => a.ItemGrpCode === controller.states.selectedItemGroup
  );
  return (
    <div className="text-[#495057]">
      {/* Search and Table Section */}
      <div className="justify-center">
        {!controller.states.proceed && (
          <>
            <div className="w-fit p-8 bg-white border-2 space-y-2 border-[#dfdfdf] border-l-4 border-l-red-600 rounded-md">
              <div className="flex justify-start my-1">
                <label className=" text-[#455A64]  text-[18px]">
                  SAP AA BB Search
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onChange={(e) =>
                    controller.actions.setSearchItem({
                      searchItem: e.target.value,
                    })
                  }
                  className="p-2 text-[18px] h-12 w-96 border border-gray-300 rounded-l-md outline-none focus:ring-4 focus:ring-[#cadeff] transition duration-200 ease-in-out"
                />
                <Button
                  buttonName={
                    !controller.states.searching
                      ? "Search Item"
                      : "Processing..."
                  }
                  onClick={controller.actions.handleSearchItem}
                  className="rounded-r-md rounded-l-sm"
                  disabled={controller.states.searching}
                >
                  {!controller.states.searching ? <FaSearch /> : <Loading />}
                </Button>
              </div>
            </div>

            <div className="">
              {controller.states.searchData.length !== 0 ? (
                <>
                  <SearchTable
                    data={controller.states.searchData}
                    itemGroups={controller.states.itemGroup}
                    rowsPerPage={15}
                  />
                  <div className="flex flex-wrap justify-start md:justify-end items-center gap-6 space-y-4 ">
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
              ) : (
                !controller.states.hasData && (
                  <>
                    <div className="flex flex-wrap justify-start md:justify-center items-center space-x-4 space-y-4 m-4 p-4 ">
                      <p className="text-red-500 font-semibold text-[21px]">
                        No data found!
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-start md:justify-end items-center space-x-4 space-y-4 m-4 p-4 ">
                      <div className="">
                        <Button
                          onClick={controller.actions.handleYesProceed}
                          buttonName="Create Item Request"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
          </>
        )}
      </div>
      {/* End of Search and Table Section */}

      {/* Form remain hidden till the user want's to proceed */}
      {controller.states.proceed ? (
        <form
          id
          onSubmit={controller.actions.handleSubmitData}
          className="bg-inherit p-4 border-2 border-l-4 border-l-red-500 border-gray-300 rounded-xl"
        >
          <Label
            labelName={
              form?.FormName ? form.FormName + " Request Form" : "Request Form"
            }
            isTitle={true}
            className="text-[18px] font-semibold"
          />
          <hr className="border-2 border-gray-300 my-2" />
          <div>
            <div className="flex flex-wrap pt-2 px-2 mx-4 my-4 gap-4 justify-start">
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
            <div className="flex flex-wrap p-1 mx-4 my-4 gap-4 justify-start">
              {/* Defaul fields if the user want's to continue */}
              {controller.states.requestMethod === "manual" ? (
                <>
                  <div className="flex flex-col p-4 gap-4 w-full justify-start border rounded-md border-l-4 border-l-red-300">
                    <div>
                      <Label labelName={"SAP Item Group"} isTitle={true} />
                    </div>
                    <div className="w-[270px]">
                      <Controller
                        name="itemGroupCode"
                        defaultValue={null}
                        control={controller.form.control}
                        render={({ field }) => (
                          <SelectField
                            field={field}
                            data={controller.states.itemGroup}
                            code_key="item_group_code"
                            value_key="item_group_name"
                            placeholder="Select Item Group"
                            setState={controller.actions.setSelectedItemGroup}
                          />
                        )}
                      />
                    </div>
                  </div>
                  {/* Subforms depending on the selected item group */}
                  {form?.FormPath({
                    controller: controller,
                  })}
                </>
              ) : (
                <BizBoxForm controller={controller} />
              )}
            </div>
            {/* End of defaul fields if the user want's to continue */}
            {controller.states.selectedItemGroup ? (
              <div className="flex justify-end">
                <div className="flex col-span-4 m-4 item-center">
                  <Button
                    type="button"
                    buttonName="Cancel"
                    onClick={controller.actions.handleCancelButton}
                    className="bg-gray-400 shadow-gray-300"
                  />
                </div>
                <div className="flex col-span-4 m-4 item-center justify-end">
                  <Button
                    type="button"
                    buttonName={`${
                      controller.states.isSaving ? "Processing..." : "Submit"
                    }`}
                    disabled={controller.states.isSaving}
                    onClick={controller.actions.handleSubmitButton}
                  />
                </div>
              </div>
            ) : (
              <div className="flex col-span-4 m-4 item-center justify-end">
                <Button
                  type="button"
                  buttonName="Back to Search"
                  onClick={controller.actions.handleBackToSearch}
                />
              </div>
            )}
          </div>
        </form>
      ) : (
        ""
      )}
      <ConfirmationModal
        isSubmit={controller.states.submit}
        isOpen={controller.states.isModalOpen}
        onClose={controller.actions.handleCloseModal}
        onConfirm={controller.actions.handleConfirm}
        onCancel={controller.actions.handleCancel}
      />
    </div>
  );
};

export default CreateRequestItem;
