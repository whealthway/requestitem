import FORM_MODE from "../constants/formPath";

const transformMedicineData = (data) => {
  let genericName = "";
  let dosage = "";
  for (let i = 1; i <= data["itemNameCount"]; i++) {
    if (Object.hasOwn(data, `genericName${i}`)) {
      if (data[`genericName${i}`].trim().length > 0) {
        genericName += ` ${data[`genericName${i}`]} `;
        dosage += ` ${data[`dose${i}`]} ${data[`dosage${i}`]} `;
        if (i <= data.itemNameCount - 1) {
          genericName = genericName + "+";
          dosage = dosage + "/";
        }
      }
    }
  }

  const medicineName = `${genericName} (${data["brandName"]}) [${data["manufacturer"]}] ${dosage} ${data["dosageForm"]} ${data["otherDescription"]} `;

  return [medicineName, genericName, dosage];
};

const dataTransform = (itemGroup, data, user, bu) => {
  const sapItemGroup = data["itemGroupCode"]?.value
    ? {
        sapItemGroupCode: data["itemGroupCode"]?.value,
        sapItemGroupName: data["itemGroupCode"]?.label,
      }
    : { sapItemGroupCode: itemGroup, sapItemGroupName: itemGroup };

  let transformedData = {
    createdBy: user,
    department: "department name",
    qualimedBU: bu,
    inventoryUOMCode: data["inventoryUOM"]?.value,
    inventoryUOMName: data["inventoryUOM"]?.label,
    ...sapItemGroup,
    purchaseable: data.purchaseable ? 1 : 0,
    sellable: data.sellable ? 1 : 0,
    inventorable: data.inventorable ? 1 : 0,
    status: "Pending",
  };
  // delete data["checkboxes"];
  let suppliesCode = [];

  // eslint-disable-next-line array-callback-return
  FORM_MODE.map((item, index) => {
    if (item.FormName.includes("Supp")) {
      suppliesCode.push(item.ItemGrpCode);
    }
  });
  if (itemGroup === "med" || itemGroup === "107") {
    const [medicineName, genericName, dosage] = transformMedicineData(data);
    transformedData = {
      ...transformedData,
      itemDescription: medicineName,
      detailedItem: {
        genericName: genericName,
        dosage: dosage,
        brand: data["brand"],
        dosageForm: data["dosageForm"],
        packagingType: data["inventoryUOM"].label,
      },
    };
  } else if (suppliesCode.includes(itemGroup) || itemGroup === "sup") {
    transformedData = {
      ...transformedData,
      itemDescription: data["itemDescription"],
      detailedItem: {
        brand: data["brand"],
        productCode: data["productCode"],
      },
    };
  } else {
    console.log("DEFAULT");
  }
  return transformedData;
};

export default dataTransform;
