import React from "react";
import { Controller } from "react-hook-form";
import { Label, SelectField, TextField } from "../../../../../components/ui";
import ITEM_INFO from "../../../../../constants/itemInfo";
import Tooltip from "../../../../../components/custom/Tooltip";

const SuppliesForm = ({ register, control, errors, uoms }) => {
  return (
    <div className="my-1 p-4 w-full justify-start border rounded-md border-l-4 border-l-red-300">
      <div className="">
        <Label
          labelName="Specification"
          isTitle={true}
          className="text-[18px] text-re"
        />
      </div>
      <div className="flex flex-wrap items-end gap-2 my-4 pb-3 border-b-4 rounded-sm">
        <div className="w-[50%]">
          <div className="flex flex-row justify-start gap-2 ">
            <div>
              <Label labelName="Item Description" />
              <label className="text-red-500">*</label>
            </div>
            <div>
              <Tooltip
                toolTipContent="example input: STICKER ON SINTRA, 3MM, MATTEFINISH, CUT SIZE
              9.2CM X 24.6CM"
              />
            </div>
            {/* <label className="text-[12px] text-red-500 font-semibold italic">
              (example input: STICKER ON SINTRA, 3MM, MATTEFINISH, CUT SIZE
              9.2CM X 24.6CM)
            </label> */}
          </div>
          <div className="">
            <TextField
              register={register}
              name="itemDescription"
              className="w-full"
              isRequired={true}
              errorName="Item Description is required"
            />
            <p style={{ color: "red" }}>{errors?.itemDescription?.message}</p>
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Packaging Type" />
            <label className="text-red-500">*</label>
          </div>
          <div className="w-[270px]">
            <Controller
              name="inventoryUOM"
              defaultValue={null}
              control={control}
              rules={{ required: "Packaging is required" }}
              render={({ field, fieldState }) => (
                <SelectField
                  field={field}
                  fieldState={fieldState}
                  data={uoms}
                  code_key="uom_code"
                  value_key="uom_name"
                  placeholder="Select UOM"
                />
              )}
            />
          </div>
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
            <input
              {...register(item.name)}
              type="checkbox"
              defaultChecked={false}
              className="h-6 w-6"
            />
            <Label labelName={item.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliesForm;
