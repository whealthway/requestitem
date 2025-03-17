import { GeneralAndPharmacyMedicineForm } from "../pages/itemrequest/component/RequestForms";

const BIZBOX_ITEM_GROUP = [
  {
    ItemGrpCode: "ADM",
    FormPath: () => <div>ADM</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "LAB",
    FormPath: () => <div>LAB</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "MED",
    FormPath: ({ controller }) => (
      <GeneralAndPharmacyMedicineForm
        register={controller.form.register}
        control={controller.form.control}
        uoms={controller.states.uoms}
        setValue={controller.form.setValue}
      />
    ),
    FormName: "",
  },
  {
    ItemGrpCode: "NFS",
    FormPath: () => <div>NFS</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "ORF",
    FormPath: () => <div>ORF</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "OTH",
    FormPath: () => <div>OTH</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "PRC",
    FormPath: () => <div>PRC</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "SUP",
    FormPath: () => <div>SUP</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "XRY",
    FormPath: () => <div>XRY</div>,
    FormName: "",
  },
];

export default BIZBOX_ITEM_GROUP;
