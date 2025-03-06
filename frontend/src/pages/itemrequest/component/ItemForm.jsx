import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import Button from "../../../components/ui/Button";
import TextField from "../../../components/ui/TextField";
import Label from "../../../components/ui/Label";
import RadioButton from "../../../components/ui/RadioButton";
import SelectField from "../../../components/ui/SelectField";
import { Controller } from "react-hook-form";

const ItemForm = ({ controller }) => {
  return (
    <>
      {/* Start of adding generic name and UOM */}
      <div className="container m-4 p-4 border border-slate-300 rounded-md">
        <div className="flex flex-row m-4">
          <Label labelName={"Item Details"} />
        </div>
        <div className="flex flex-row m-4">
          <Button
            type="button"
            className={`sm:visible invisible ${
              controller.states.fields.length === 5
                ? "bg-gray-600"
                : "hover:scale-105"
            }`}
            onClick={controller.actions.handleAddFields}
            disabled={controller.states.fields.length === 5 ? true : false}
          >
            {" "}
            Add General Name and UOM
          </Button>
          <Button
            type="button"
            className={`sm:invisible visible`}
            onClick={controller.actions.handleAddFields}
            disabled={controller.states.fields.length === 5 ? true : false}
          >
            {" "}
            <CiSquarePlus
              className={`h-10 w-10 sm:hidden rounded-md ${
                controller.states.fields.length === 5
                  ? "bg-gray-400 hover:disabled:transition-none"
                  : "hover:scale-105"
              }`}
            />
          </Button>
        </div>

        {controller.states.fields.map((_, index) => (
          <div className="flex flex-wrap justify-between gap-4 m-4 p-8 border border-gray-300">
            <div className="row-span-2" key={`genericName${index + 1}`}>
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
            <div className="row-span-2" key={`measurement${index + 1}`}>
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
            <div className="row-span-2" key={`uom${index + 1}`}>
              <div>
                <Label labelName={`Unit of Measure ${index + 1}`} />
              </div>
              <div>
                <Controller
                  name={`unitOfMeasure${index + 1}`}
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
          </div>
        ))}
      </div>
      {/* End of adding generic name and UOM  */}

      {/* Brandname, MFG, and Other Descriptors Sections */}
      <div className="flex flex-wrap justify-between gap-4">
        <div className="row-span-2">
          <div>
            <Label labelName={"Brand Name"} />
          </div>
          <div>
            <TextField register={controller.form.register} name="brandName" />
          </div>
        </div>
        <div className="row-span-2">
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
      </div>
      {/* End of Brandname, MFG, and Other Descriptors Sections */}

      {/* Radio button section */}
      <div className="flex flex-wrap gap-8 my-8">
        <Label labelName="Item Description:" />
        <div className="flex gap-2 item-center content-center">
          <RadioButton
            register={controller.form.register}
            handleRadioChange={controller.actions.handleRadioChange}
            itemDescription={controller.states.itemDescription}
            name="purchaseable"
            value="purchaseable"
          />
          <label htmlFor="purchaseable">Purchaseable</label>
        </div>
        <div className="flex gap-2 item-center content-center">
          <RadioButton
            register={controller.form.register}
            handleRadioChange={controller.actions.handleRadioChange}
            itemDescription={controller.states.itemDescription}
            name="sellable"
            value="sellable"
          />
          <label htmlFor="sellable">Sellable</label>
        </div>
        <div className="flex gap-2 item-center content-center">
          <RadioButton
            register={controller.form.register}
            handleRadioChange={controller.actions.handleRadioChange}
            itemDescription={controller.states.itemDescription}
            name="inventoryItem"
            value="inventoryItem"
          />
          <label htmlFor="inventoryItem">Inventory Item</label>
        </div>
      </div>
      {/* End of Radio button section */}
    </>
  );
};

export default ItemForm;
