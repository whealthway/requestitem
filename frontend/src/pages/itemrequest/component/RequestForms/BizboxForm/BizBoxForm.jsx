import React from "react";
import { Label, TextField } from "../../../../../components/ui";
import BIZBOX_ITEM_GROUP from "../../../../../constants/bizboxItemGroup";
import useBizBox from "./useBizBox";
import BUSearchButton from "../../../../../components/custom/BUSearchButton";

const BizBoxForm = ({ controller }) => {
  const setSelectedItemGroup = controller.actions.setSelectedItemGroup;
  const bbController = useBizBox({ setSelectedItemGroup });
  controller.actions.setSelectedItemGroup(
    bbController.states.bbCodeData.item_group
  );
  const form = BIZBOX_ITEM_GROUP.find(
    (a) => a.ItemGrpCode === bbController.states.bbCodeData.item_group
  );

  return (
    <>
      <div className="flex flex-col p-4 gap-4 w-full justify-start border rounded-md border-l-4 border-l-red-300">
        <div>
          <Label labelName="BizBox Code" />
        </div>
        <div className="flex">
          <TextField
            register={controller.form.register}
            setState={bbController.actions.setBbCode}
            name="bbCode"
            keyName="bbCode"
            className="rounded-none rounded-l-md"
          />
          <BUSearchButton
            allowedBU={controller.states.qualimedbu}
            setBUSearch={bbController.actions.setBuBranchSearch}
          />
        </div>
        <div className="flex flex-col gap-1 my-4 w-full">
          <div>
            <Label labelName="Item Description" />
          </div>
          <div>
            <TextField
              register={controller.form.register}
              name="bbDescription"
              value={bbController.states.bbCodeData?.item_description || ""}
              className="w-[50%]"
              disabled={true}
            />
          </div>
        </div>
      </div>

      {!bbController.states.hasData ? (
        <div className="flex flex-wrap justify-start md:justify-center items-center my-2 ">
          <p className="text-red-500 font-semibold text-[18px]">
            Bizbox code does not exist!
          </p>
        </div>
      ) : (
        form?.FormPath({
          controller: controller,
        })
      )}
    </>
  );
};

export default BizBoxForm;
