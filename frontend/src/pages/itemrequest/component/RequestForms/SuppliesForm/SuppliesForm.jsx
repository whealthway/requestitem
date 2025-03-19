import React from "react";
import { Controller } from "react-hook-form";
import { Label, SelectField, TextField } from "../../../../../components/ui";
import ITEM_INFO from "../../../../../constants/itemInfo";

const SuppliesForm = ({ register, control, uoms }) => {
  return (
    <div className="my-1 p-4 w-full justify-start border rounded-md border-l-4 border-l-red-300">
      <div className="">
        <Label
          labelName="Specification"
          isTitle={true}
          className="text-[18px]"
        />
      </div>
      <div className="flex flex-col gap-2 my-4 pb-3 border-b-4 rounded-sm">
        <div className="w-[50%]">
          <div>
            <Label labelName="Item Description* " />
            <label className="text-[12px] text-red-500 font-semibold italic">
              (example input: STICKER ON SINTRA, 3MM, MATTEFINISH, CUT SIZE
              9.2CM X 24.6CM)
            </label>
          </div>
          <div className="">
            <TextField
              register={register}
              name="itemDescription"
              className="w-full"
            />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Packaging Type*" />
          </div>
          <Controller
            name="inventoryUOM"
            defaultValue={null}
            control={control}
            render={({ field }) => (
              <SelectField
                field={field}
                data={uoms}
                code_key="uom_code"
                value_key="uom_name"
                placeholder="Select UOM"
              />
            )}
          />
        </div>
      </div>
      <div className="">
        <Label
          labelName="General Information"
          isTitle={true}
          className="text-[18px]"
        />
      </div>
      <div className="flex flex-wrap gap-6 my-4 pb-3 border-b-4 rounded-sm">
        <div className="">
          <div>
            <Label labelName="Brand/Manufacturer" />
          </div>
          <div>
            <TextField register={register} name="brand" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Product Code/Model Number" />
          </div>
          <div>
            <TextField register={register} name="productCode" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 items-center ">
        <div>
          <Label labelName="Item Information:" isTitle={true} />
        </div>
        {ITEM_INFO.map((item, index) => (
          <div className="flex gap-2 item-center items-center" key={index}>
            <Controller
              key={index}
              name={`checkboxes[${item.name}]`}
              control={control}
              render={({ field }) => (
                <>
                  <input
                    type="checkbox"
                    {...field}
                    checked={field.value || false}
                    className="h-6 w-6"
                  />
                  <Label labelName={item.label} />
                </>
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliesForm;
