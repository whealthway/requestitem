import React from "react";
import {
  Label,
  TextField,
  SelectField,
  RadioButton,
} from "../../../../../components/ui";
import { Controller } from "react-hook-form";

const CommonFormField = ({ controller }) => {
  return (
    <>
      <div className="flex flex-wrap p-4 mx-4 my-24 gap-4 justify-between">
        <div className="">
          <div>
            <Label labelName={"Category"} />
          </div>
          <div>
            <TextField
              register={controller.form.register}
              name="category"
              placeholder="e.g. hygene, beverages"
            />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName={"General Name"} />
          </div>
          <div>
            <TextField
              register={controller.form.register}
              name="generalName"
              placeholder="e.g. fruit, vegetable, meat, junkfood, etc.."
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
            <Label labelName={"Measurement"} />
          </div>
          <div>
            <TextField register={controller.form.register} name="measurement" />
          </div>
          {/* <p className="text-red-500 text-sm">
                    {controller.states.errors.mfg?.message}
                  </p> */}
        </div>
      </div>

      <div className="flex flex-wrap p-4 mx-4 my-24 gap-4 justify-between">
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
        <div>
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
        <div className="w-[17%]"></div>
      </div>

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
    </>
  );
};

export default CommonFormField;
