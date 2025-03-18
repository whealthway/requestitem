import React from "react";
import { Controller } from "react-hook-form";
import { Label, TextField } from "../../../../../components/ui";
import ITEM_INFO from "../../../../../constants/itemInfo";

const GroceryForm = ({ register, control, uoms }) => {
  return (
    <div className="my-1 p-4 w-full justify-start border rounded-md border-l-4 border-l-red-300">
      <div className="">
        <Label
          labelName="General Information"
          isTitle={true}
          className="text-[18px] font-semibold"
        />
      </div>
      <div className="flex flex-wrap gap-6 my-4 pb-3 border-b-4 rounded-sm">
        {/* <div className="">
          <div>
            <Label labelName="Product Name" />
          </div>
          <div>
            <TextField register={register} name="productName" />
          </div>
        </div> */}
        <div className="">
          <div>
            <Label labelName="Brand Name" />
          </div>
          <div>
            <TextField register={register} name="brandName" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Product Type/Category" />
          </div>
          <div>
            <TextField register={register} name="category" />
          </div>
        </div>
      </div>

      <div className="">
        <Label
          labelName="Specification"
          isTitle={true}
          className="text-[18px] font-semibold"
        />
      </div>
      <div className="flex flex-wrap gap-6 my-4 pb-3 border-b-4 rounded-sm">
        <div className="">
          <div>
            <Label labelName="Size/Volume" />
          </div>
          <div>
            <TextField register={register} name="size" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Variant/Flavor" />
          </div>
          <div>
            <TextField register={register} name="variant" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Product Type/Category" />
          </div>
          <div>
            <TextField register={register} name="category" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Alcohol Percentage(if applicable)" />
          </div>
          <div>
            <TextField register={register} name="alcoholPercentage" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Other Description" />
          </div>
          <div>
            <TextField register={register} name="otherDescription" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 items-center ">
        <div>
          <Label labelName="Item Information:" isTitle={true} />
        </div>
        {ITEM_INFO.map((item, index) => (
          <>
            <div className="flex gap-2 item-center items-center" key={index}>
              <Controller
                key={item.name}
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
          </>
        ))}
      </div>
    </div>
  );
};

export default GroceryForm;
