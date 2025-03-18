const transformMedicineData = (data) => {
  let genericName = "";
  let dosage = "";
  for (let i = 0; i < data.itemNameCount; i++) {
    genericName = genericName + ` ${data[`genericName${i}`]} `;
    dosage = ` ${data[`dose${i}`]} ${data[`dosage${i}`]} `;
    if (i >= data.itemNameCount - 1) {
      genericName = genericName + "+";
      dosage = dosage + "/";
    }
    // genericName.push(data[`genericName${i}`]);
    // dosage.push(`${data[`dose${i}`]} ${data[`dosage${i}`]}`);
  }

  const medicineName = `${genericName} (${data["brandName"]}) [${data["manufacturer"]}] ${dosage} ${data["dosageForm"]} ${data["otherDescription"]} `;

  return medicineName;
};

const dataTransform = (itemGroup, data) => {
  const date = new Date();
  console.log("itemgroup" + itemGroup);
  switch (itemGroup) {
    case "MED" || "107":
      const new_data = {
        requestedBy: "requestor",
        requestedDate: date.toISOString(),
        department: "department",
        itemCode: "itemCode",
        sapItemGroup: data[""],
        itemDescription: transformMedicineData(data),
        itemChunkDetails: {},
        generalInformation: {},
        specification: {},
      };
      return new_data;
    default:
      break;
  }
};
// <Generic Name> (Brand Name)[MFG/Dist] <Unit of Measurement> <Medicine Type/Receptacle>  <Other Descriptors>
export default dataTransform;
