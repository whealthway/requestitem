import React from "react";
import {
  Label,
  TextField,
  SelectField,
  Button,
} from "../../../../../components/ui";
import { Controller } from "react-hook-form";
import ITEM_INFO from "../../../../../constants/itemInfo";
import useGeneralAndPharmacyMedicineForm from "./useGeneralAndPharmacyMedicineForm";

const GeneralAndPharmacyMedicineForm = ({
  register,
  control,
  uoms,
  setValue,
}) => {
  const controller = useGeneralAndPharmacyMedicineForm({ setValue });

  return (
    <div className="flex flex-col my-4 p-4 gap-4 w-full justify-start border rounded-md border-l-4 border-l-red-300">
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

        <div className="flex flex-wrap justify-start mx-4 p-4 gap-1 border-2 border-white rounded-2xl content-center items-center">
          {controller.states.fields.map((_, index) => (
            <>
              <div key={index} className="flex flex-wrap mx-2 gap-4">
                <div className="">
                  <div>
                    <Label
                      labelName={`Generic Name ${index + 1}`}
                      className="text-red-500 font-semibold"
                    />
                  </div>
                  <div>
                    <TextField
                      register={register}
                      name={`genericName${index + 1}`}
                    />
                  </div>
                </div>
                <div className="">
                  <div>
                    <Label
                      labelName={`Dose ${index + 1}`}
                      className="text-green-800 font-semibold"
                    />
                  </div>
                  <div>
                    <TextField
                      register={register}
                      name={`dose${index + 1}`}
                      className="w-32"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Label
                      labelName={`Dosage ${index + 1}`}
                      className="text-green-800 font-semibold"
                    />
                  </div>
                  <div>
                    <TextField
                      register={register}
                      name={`dosage${index + 1}`}
                      placeholder="e.g. mg, g, ml, IU etc.."
                      className="w-32"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <p className="text-[21px] font-bold">
                    {controller.states.fields.length - 1 !== index ? "+" : ""}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* End of adding generic name and UOM  */}

      {/* Brandname, MFG, and Other Descriptors Sections */}
      <div className="flex flex-wrap m-4 gap-4 justify-start">
        <div className="">
          <div className="mx-2">
            <div>
              <Label labelName={"Brand Name"} className="" />
            </div>
            <div>
              <TextField register={register} name="brandName" />
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName={"Dosage Form"} />
          </div>
          <div>
            <TextField register={register} name="dosageForm" placeholder="" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName={"Manufacturer"} />
          </div>
          <div>
            <TextField register={register} name="manufacturer" />
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName={"Other Descriptors"} />
          </div>
          <div>
            <TextField register={register} name="otherDescriptors" />
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
          <input {...register("itemNameCount")} type="number" hidden />
        </div>
        {/* End of Brandname, MFG, and Other Descriptors Sections */}
      </div>
      {/* Radio button section */}
      <div className="flex flex-wrap gap-8 m-8 items-center">
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
      {/* End of Radio button section */}
    </div>
  );
};

export default GeneralAndPharmacyMedicineForm;
