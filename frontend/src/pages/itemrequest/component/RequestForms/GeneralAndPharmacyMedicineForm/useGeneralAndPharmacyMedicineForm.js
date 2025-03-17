import { useState, useEffect } from "react";

const useGeneralAndPharmacyMedicineForm = ({ setValue }) => {
  const [fields, setFields] = useState([
    { field1: "", field2: "", field3: "" },
  ]);
  const [itemNameCount, setItemNameCount] = useState(1);

  const handleAddFields = () => {
    setFields([...fields, { field1: "", field2: "", field3: "" }]);
    setItemNameCount(itemNameCount + 1);
  };

  useEffect(() => {
    setValue("itemNameCount", itemNameCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemNameCount]);

  return {
    states: {
      fields,
      itemNameCount,
    },
    actions: {
      handleAddFields,
    },
  };
};

export default useGeneralAndPharmacyMedicineForm;
