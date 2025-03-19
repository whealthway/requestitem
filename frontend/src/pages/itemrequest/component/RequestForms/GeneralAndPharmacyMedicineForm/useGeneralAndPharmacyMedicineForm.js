import { useState, useEffect } from "react";

const useGeneralAndPharmacyMedicineForm = ({ setValue, unregister }) => {
  const [itemNameCount, setItemNameCount] = useState(1);
  const [fields, setFields] = useState([
    { id: itemNameCount, field1: "", field2: "", field3: "" },
  ]);
  console.log(fields);
  const handleAddFields = () => {
    setFields([
      ...fields,
      { id: itemNameCount + 1, field1: "", field2: "", field3: "" },
    ]);
    setItemNameCount(itemNameCount + 1);
  };

  const handleRemoveFields = (id) => {
    setFields(fields.filter((field) => field.id !== id));
    unregister(`genericName${id}`);
    unregister(`dose${id}`);
    unregister(`dosage${id}`);
  };

  useEffect(() => {
    setValue("itemNameCount", itemNameCount);
    console.log(itemNameCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemNameCount]);

  return {
    states: {
      fields,
      itemNameCount,
    },
    actions: {
      handleAddFields,
      handleRemoveFields,
    },
  };
};

export default useGeneralAndPharmacyMedicineForm;
