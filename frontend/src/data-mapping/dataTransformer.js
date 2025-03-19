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

  return medicineName;
};

const dataTransform = (itemGroup, data) => {
  const date = new Date();
  let transformedData = {
    requestedBy: "requestor",
    requestedDate: date.toISOString(),
    department: "department",
    itemCode: "itemCode",
    inventoryUOM: data[""],
    sapItemGroupCode: itemGroup,
    sellable: data.checkboxes["sellable"] || false,
    purchaseable: data.checkboxes["purchaseable"] || false,
    inventoryItem: data.checkboxes["inventorable"] || false,
  };
  delete data["checkboxes"];
  let suppliesCode = [];

  // eslint-disable-next-line array-callback-return
  FORM_MODE.map((item, index) => {
    if (item.FormName.includes("Supp")) {
      suppliesCode.push(item.ItemGrpCode);
    }
  });
  console.log(suppliesCode);
  if (itemGroup === "med" || itemGroup === "107") {
    transformedData = {
      ...transformedData,
      itemDescription: transformMedicineData(data),
      itemChunkDetails: {},
      generalInformation: {},
      specification: {
        genericName: "",
        doses: "",
        dosage: "",
        brand: "",
        dosageForm: "",
        packagingType: "",
      },
    };
  } else if (suppliesCode.includes(itemGroup)) {
    transformedData = {
      ...transformedData,
      ...data,
    };
  } else {
    console.log("DEFAULT");
  }
  return transformedData;
};

export default dataTransform;
