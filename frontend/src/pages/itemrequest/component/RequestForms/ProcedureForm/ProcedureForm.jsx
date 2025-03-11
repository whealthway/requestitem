import React from "react";
import { TextField, Label } from "../../../../../components/ui";

const ProcedureForm = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="row-span-2">
        <div>
          <label htmlFor="">Procedure/Machine</label>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="row-span-2">
        <div>
          <label htmlFor="">Acronym</label>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="row-span-2">
        <div>
          <label htmlFor="">Body Parts</label>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="row-span-2">
        <div>
          <label htmlFor="">Area</label>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="row-span-2">
        <div>
          <label htmlFor="">With or Without Contrast</label>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="row-span-2">
        <div>
          <label htmlFor="">Other Descriptors</label>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default ProcedureForm;
