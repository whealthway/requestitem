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
import { MdDelete } from "react-icons/md";

const GeneralAndPharmacyMedicineForm = ({
  register,
  control,
  uoms,
  setValue,
  unregister,
  errors,
  showError,
}) => {
  const controller = useGeneralAndPharmacyMedicineForm({
    setValue,
    unregister,
  });

  return (
    <div className="flex flex-col my-1 p-4 w-full justify-start border rounded-md border-l-4 border-l-red-300">
      {/* Start of adding generic name and UOM */}
      <div>
        <Label labelName="Specification" isTitle={true} />
      </div>
      <div className="flex flex-wrap max-w-fit gap-6 mt-4">
        <div className="flex flex-col mx-2 p-2 border-2 border-gray-300 rounded-xl bg-slate-200">
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
          <div className="flex flex-wrap justify-start p-4 gap-4 content-center items-center">
            {controller.states.fields.map((field, index) => (
              <div key={field.id} className="border-2 border-white pl-2 ">
                <div className="flex flex-wrap ml-2 my-2">
                  <div className="flex flex-row">
                    <div>
                      <div className="">
                        <div>
                          <Label labelName={`Generic Name`} />
                          <label className="text-red-500 font-semibold">
                            *
                          </label>
                        </div>
                        <div>
                          <TextField
                            register={register}
                            name={`genericName${field.id}`}
                            isRequired={true}
                            errorName="Generic Name is required"
                            className="w-32"
                          />
                          <p style={{ color: "red" }}>
                            {errors[`genericName${field.id}`]?.message}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <div>
                          <Label labelName={`Dose`} />
                          <label className="text-red-500 font-semibold">
                            *
                          </label>
                        </div>
                        <div>
                          <TextField
                            register={register}
                            name={`dose${field.id}`}
                            isRequired={true}
                            errorName="Dose is required"
                            className="w-32"
                          />
                          <p style={{ color: "red" }}>
                            {errors[`dose${field.id}`]?.message}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <Label labelName={`Dosage`} />
                          <label className="text-red-500 font-semibold">
                            *
                          </label>
                        </div>
                        <div>
                          <TextField
                            register={register}
                            name={`dosage${field.id}`}
                            isRequired={true}
                            errorName="Dosage Name is required"
                            placeholder="e.g. mg, g, ml, IU etc.."
                            className="w-32"
                          />
                          <p style={{ color: "red" }}>
                            {errors[`dosage${field.id}`]?.message}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      {index + 1 !== 1 ? (
                        <button
                          onClick={() =>
                            controller.actions.handleRemoveFields(field.id)
                          }
                        >
                          <MdDelete className="w-8 h-8 text-red-500" />
                        </button>
                      ) : (
                        <div className="w-8 h-8"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-6 mb-4 pb-3 mx-4 border-b-4 rounded-sm">
        <div className="flex flex-wrap items-center justify-start gap-4">
          <div className="">
            <div>
              <Label labelName={"Dosage Form"} />
              <label className="text-red-500 font-semibold">*</label>
            </div>
            <div>
              <TextField
                register={register}
                name="dosageForm"
                isRequired={true}
                errorName="Dosage Form Name is required"
                placeholder=""
              />
            </div>
            <p style={{ color: "red" }}>{errors?.dosageForm?.message}</p>
          </div>
          <div>
            <div>
              <Label labelName="Packaging Type" />
              <label className="text-red-500 font-semibold">*</label>
            </div>
            <div>
              <Controller
                name="inventoryUOM"
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

        <input {...register("itemNameCount")} type="number" hidden />
      </div>
      <div>
        <Label labelName="General Information" isTitle={true} />
      </div>
      <div className="flex flex-wrap gap-6 my-4 pb-3 border-b-4 rounded-sm">
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
            <Label labelName={"Manufacturer"} />
          </div>
          <div>
            <TextField register={register} name="manufacturer" />
            <p style={{ color: "red" }}>{errors?.manufacturer?.message}</p>
          </div>
        </div>
        <div className="">
          <div>
            <Label labelName={"Other Descriptors"} />
          </div>
          <div>
            <TextField register={register} name="otherDescription" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 my-4 items-center">
        <div>
          <Label labelName="Item Information:" isTitle={true} />
        </div>
        {ITEM_INFO.map((item, index) => (
          <div className="flex gap-2 item-center items-center" key={index}>
            <input
              {...register(item.name)}
              type="checkbox"
              defaultChecked={true}
              className="h-6 w-6"
            />
            <Label labelName={item.label} />
          </div>
        ))}
      </div>
      {showError && <p style={{ color: "red" }}>Choose atleast one</p>}
      {/* End of Radio button section */}
    </div>
  );
};

export default GeneralAndPharmacyMedicineForm;
