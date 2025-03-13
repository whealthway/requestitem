import React from "react";
import { Label, TextField } from "../../../../../components/ui";

const BizBoxForm = ({ controller }) => {
  return (
    <div>
      <div>
        <Label labelName="Item Description" />
        <TextField
          register={controller.form.register}
          name="item_description"
        />
      </div>
    </div>
  );
};

export default BizBoxForm;
