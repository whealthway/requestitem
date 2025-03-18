import React from "react";
import { Controller } from "react-hook-form";
import { Label, SelectField, TextField } from "../../../../../components/ui";
import ITEM_INFO from "../../../../../constants/itemInfo";
import STERILITY from "../../../../../constants/sterile";

const MedicalSupplyForm = ({ register, control, uoms }) => {
  return (
    <div className="my-1 p-4 w-full justify-start border rounded-md border-l-4 border-l-red-300">
      <div className="">
        <Label
          labelName="General Information"
          isTitle={true}
          className="text-[18px]"
        />
      </div>
      <div className="flex flex-wrap gap-6 my-4 pb-3 border-b-4 rounded-sm">
        {/* <div className="">
          <div>
            <Label labelName="Product Name" />
          </div>
          <div>
            <TextField register={register} name="productName" placeholder="" />
          </div>
        </div> */}
        <div className="">
          <div>
            <Label labelName="Brand/Manufacturer" />
          </div>
          <div>
            <TextField register={register} name="manufacturer" placeholder="" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Product Code/Model Number" />
          </div>
          <div>
            <TextField register={register} name="productCode" placeholder="" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Category/Type" />
          </div>
          <div>
            <TextField register={register} name="category" placeholder="" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Usage/Application " />
          </div>
          <div>
            <TextField register={register} name="usage" placeholder="" />
          </div>
        </div>
      </div>

      <div className="">
        <Label
          labelName="Specification"
          isTitle={true}
          className="text-[18px]"
        />
      </div>
      <div className="flex flex-wrap gap-6 my-4 pb-3 border-b-4 rounded-sm">
        <div className="">
          <div>
            <Label labelName="Size/Dimensions" />
          </div>
          <div>
            <TextField register={register} name="size" placeholder="" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Material Properties" />
          </div>
          <div>
            <TextField
              register={register}
              name="materialProperties"
              placeholder=""
            />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Special Features" />
          </div>
          <div>
            <TextField
              register={register}
              name="specialFeatures"
              placeholder=""
            />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName="Packaging Type" />
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
        <div className="">
          <div>
            <Label labelName="Other Description" />
          </div>
          <div>
            <TextField
              register={register}
              name="otherDescription"
              placeholder=""
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <Label labelName="Sterility:" />
          </div>
          <div className="flex flex-wrap gap-4">
            {STERILITY.map((item, index) => (
              <>
                <div
                  className="flex gap-2 item-center items-center"
                  key={index}
                >
                  <Controller
                    key={item.name}
                    name={`${item.name}]`}
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

export default MedicalSupplyForm;
