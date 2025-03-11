import React from "react";
// import { CiSquarePlus } from "react-icons/ci";
import {
  Label,
  TextField,
  SelectField,
  Button,
  RadioButton,
} from "../../../../../components/ui";
import { Controller } from "react-hook-form";

const ItemForm = ({ controller }) => {
  return (
    <>
      {/* Start of adding generic name and UOM */}
      <div className="mx-2 p-2 border-2 border-gray-300 rounded-xl bg-slate-200">
        <div className="flex flex-row mx-4">
          <Label labelName={"Item Details"} isTitle={true} />
        </div>
        <div className="flex flex-row mx-4 my-2 justify-start items-center">
          <Button
            buttonName="Add General Name and UOM"
            type="button"
            className={`sm:visible invisible${
              controller.states.fields.length === 5
                ? "bg-gray-600"
                : "hover:scale-105"
            }`}
            onClick={controller.actions.handleAddFields}
            disabled={controller.states.fields.length === 5 ? true : false}
          />
        </div>

        {controller.states.fields.map((_, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between mx-4 p-4 border-2 border-white rounded-2xl"
          >
            <div className="">
              <div>
                <Label labelName={`Generic Name ${index + 1}`} />
              </div>
              <div>
                <TextField
                  register={controller.form.register}
                  name={`genericName${index + 1}`}
                />
              </div>
            </div>
            <div>
              <div>
                <Label labelName={`Measurement ${index + 1}`} />
              </div>
              <div>
                <TextField
                  register={controller.form.register}
                  name={`measurement${index + 1}`}
                />
              </div>
            </div>
            <div>
              <div>
                <Label labelName={`Unit of measure ${index + 1}`} />
              </div>
              <div>
                <TextField
                  register={controller.form.register}
                  name={`unitOfMeasure${index + 1}`}
                  placeholder="e.g. mg, g, ml, IU etc.."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End of adding generic name and UOM  */}

      {/* Brandname, MFG, and Other Descriptors Sections */}
      <div className="flex flex-wrap p-4 mx-4 my-24 gap-4 justify-between">
        <div className="">
          <div>
            <Label labelName={"Medicine Type/Receptacle"} />
          </div>
          <div>
            <TextField
              register={controller.form.register}
              name="medicineType"
            />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName={"Brand Name"} />
          </div>
          <div>
            <TextField register={controller.form.register} name="brandName" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName={"MFG"} />
          </div>
          <div>
            <TextField register={controller.form.register} name="mfg" />
          </div>
          {/* <p className="text-red-500 text-sm">
                    {controller.states.errors.mfg?.message}
                  </p> */}
        </div>
        <div className="">
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
      </div>
      {/* End of Brandname, MFG, and Other Descriptors Sections */}
      <div className="m-8">
        <div>
          <Label labelName="Inventory UOM" />
        </div>
        <div>
          <Controller
            name="inventoryUOM"
            defaultValue={null}
            control={controller.form.control}
            render={({ field }) => (
              <SelectField
                field={field}
                data={controller.states.uoms}
                code_key="UOMCdoe"
                value_key="UOMName"
                placeholder="Select UOM"
              />
            )}
          />
        </div>
      </div>
      {/* Radio button section */}
      <div className="flex flex-wrap gap-8 m-8 items-center">
        <div>
          <Label labelName="Item Information:" isTitle={true} />
        </div>
        <div className="flex gap-2 item-center items-center">
          <RadioButton
            register={controller.form.register}
            handleRadioChange={controller.actions.handleRadioChange}
            itemDescription={controller.states.itemDescription}
            name="purchaseable"
            value="purchaseable"
          />
          <Label labelName="Purchaseable" />
        </div>
        <div className="flex gap-2 item-center items-center">
          <RadioButton
            register={controller.form.register}
            handleRadioChange={controller.actions.handleRadioChange}
            itemDescription={controller.states.itemDescription}
            name="sellable"
            value="sellable"
          />
          <Label labelName="Sellable" />
        </div>
        <div className="flex gap-2 item-center items-center">
          <RadioButton
            register={controller.form.register}
            handleRadioChange={controller.actions.handleRadioChange}
            itemDescription={controller.states.itemDescription}
            name="inventoryItem"
            value="inventoryItem"
          />
          <Label labelName="Inventory Item" />
        </div>
      </div>
      {/* End of Radio button section */}
    </>
  );
};

export default ItemForm;
