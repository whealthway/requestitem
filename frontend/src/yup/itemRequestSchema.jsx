import * as y from "yup";

export default y.object().shape({
  //   itemCode: y.string().required(),
  dateRequested: y.string().required("Date requested is required"),
  requestedById: y.string().required(),
  requestedBy: y.string().required(),
  itemGroupCode: y.string().required("Item group is required"),
  qualimedBu: y.string().required("Qualimed BU is required"),
  bizboxCode: y.string().required(),
  genericName: y.string().required("Generic name is required"),
  measurement: y.string().required("Measurement is required"),
  unitOfMeasure: y.string().required("Unit of measure is required"),
  brandName: y.string(),
  mfg: y.string().required("MFG is required"),
  otherDesccriptors: y.string(),
  purchaseable: y.boolean().required(),
  sellabe: y.boolean().required(),
  inventortyItem: y.boolean().required(),
});
