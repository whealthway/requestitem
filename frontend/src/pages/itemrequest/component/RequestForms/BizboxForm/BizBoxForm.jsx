import React from "react";
import { Label, SelectField, TextField } from "../../../../../components/ui";
import BIZBOX_ITEM_GROUP from "../../../../../constants/bizboxItemGroup";
import { Controller } from "react-hook-form";
import BU_BRANCH from "../../../../../constants/buBranch";
import useBizBox from "./useBizBox";
import SearchButton from "../../../../../components/custom/SearchButton";

const BizBoxForm = ({ controller }) => {
  const bbController = useBizBox();
  const form = BIZBOX_ITEM_GROUP.find(
    (a) => a.ItemGrpCode === bbController.states.bbCodeData.item_group
  );

  return (
    <div>
      <div className="flex flex-col p-4 gap-4 w-fit justify-start items-center border rounded-md border-l-4 border-l-red-300">
        <div>
          <Label labelName={"BizBox Code"} />
        </div>
        <div className="flex">
          <TextField
            register={controller.form.register}
            setState={bbController.actions.setBbCode}
            name="bbCode"
            keyName="bbCode"
            className="rounded-none rounded-l-md"
          />
          <Controller
            name="buBranch"
            defaultValue={null}
            control={controller.form.control}
            render={({ field }) => (
              <SelectField
                field={field}
                data={BU_BRANCH}
                code_key="value"
                value_key="label"
                placeholder="Search"
                setState={bbController.actions.setBuBranch}
                width="10rem"
                height=""
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 my-4 w-full">
        <div>
          <Label labelName="Item Description" />
        </div>
        <div>
          <TextField
            register={controller.form.register}
            name="bbDescription"
            value={bbController.states.bbCodeData?.item_description}
            className="w-[50%]"
            disabled={true}
          />
        </div>
      </div>
      {form?.FormPath({
        controller: controller,
      })}
    </div>
  );
};

export default BizBoxForm;
