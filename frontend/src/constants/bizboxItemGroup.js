import {
  SuppliesForm,
  GeneralAndPharmacyMedicineForm,
} from "../pages/itemrequest/component/RequestForms";

const BIZBOX_ITEM_GROUP = [
  {
    ItemGrpCode: "ADM",
    FormPath: () => <div>ADM</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "LAB",
    FormPath: ({ controller }) => (
      <SuppliesForm
        register={controller.form.register}
        control={controller.form.control}
        setValue={controller.form.setValue}
        reset={controller.form.reset}
        errors={controller.form.errors}
        uoms={controller.states.uoms}
      />
    ),
    FormName: "Laboratory Supply",
  },
  {
    ItemGrpCode: "MED",
    FormPath: ({ controller }) => (
      <GeneralAndPharmacyMedicineForm
        register={controller.form.register}
        control={controller.form.control}
        setValue={controller.form.setValue}
        unregister={controller.form.unregister}
        uoms={controller.states.uoms}
        errors={controller.form.errors}
        showError={controller.states.showError}
      />
    ),
    FormName: "Medicine",
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
    FormPath: ({ controller }) => (
      <SuppliesForm
        register={controller.form.register}
        control={controller.form.control}
        setValue={controller.form.setValue}
        reset={controller.form.reset}
        errors={controller.form.errors}
        uoms={controller.states.uoms}
      />
    ),
    FormName: "",
  },
  {
    ItemGrpCode: "XRY",
    FormPath: () => <div>XRY</div>,
    FormName: "",
  },
];

export default BIZBOX_ITEM_GROUP;
