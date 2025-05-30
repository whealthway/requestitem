import { GeneralAndPharmacyMedicineForm } from "../pages/itemrequest/component/RequestForms";
import SuppliesForm from "../pages/itemrequest/component/RequestForms/SuppliesForm";

const FORM_MODE = [
  {
    ItemGrpCode: "100",
    FormPath: () => <div>Item</div>,
    FormName: "Item",
  },
  {
    ItemGrpCode: "101",
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
    FormName: "Medical Supply",
  },
  {
    ItemGrpCode: "102",
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
    FormName: "Lab Supply",
  },
  {
    ItemGrpCode: "104",
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
    FormName: "Office Supply",
  },
  {
    ItemGrpCode: "103",
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
    FormName: "Image Supply",
  },
  {
    ItemGrpCode: "105",
    FormPath: () => <div>Linen and Beddings</div>,
    FormName: "Linen and Beddings",
  },
  {
    ItemGrpCode: "106",
    FormPath: () => <div>Housekeeping</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "107",
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
    FormName: "General and Pharmacy Medicine",
  },
  {
    ItemGrpCode: "108",
    FormPath: () => <div>Consumables</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "109",
    FormPath: () => <div>Galenical Goods</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "110",
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
    FormName: "Marketing Supplies",
  },
  {
    ItemGrpCode: "111",
    FormPath: () => <div>Services</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "112",
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
    FormName: "Dental Supplies",
  },
  {
    ItemGrpCode: "113",
    FormPath: () => <div>Doctors Fee</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "114",
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
    FormName: "Uniform Supplies",
  },
  {
    ItemGrpCode: "115",
    FormPath: () => <div>Package</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "116",
    FormPath: () => <div>Procedure</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "117",
    FormPath: () => <div>Non- Inventory</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "118",
    FormPath: () => <div>Examinations</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "119",
    FormPath: () => <div>Miscellaneous</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "120",
    FormPath: () => <div>Sales Of Service</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "132",
    FormPath: () => <div>Contracted Services</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "133",
    FormPath: () => <div>Non Inventory</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "134",
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
    FormName: "Lab Supplies",
  },
  {
    ItemGrpCode: "135",
    FormPath: () => <div>Imaging</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "136",
    FormPath: () => <div>Ancillary</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "137",
    FormPath: () => <div>Operating Room</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "138",
    FormPath: () => <div>Professional Fee Ruv</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "139",
    FormPath: () => <div>Consultation</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "140",
    FormPath: () => <div>Industrial Medicine</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "141",
    FormPath: () => <div>Sales Discount</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "131",
    FormPath: () => <div>Fixed Asset</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "142",
    FormPath: () => <div>CCS</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "143",
    FormPath: () => <div>Endoscopy</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "144",
    FormPath: () => <div>Senior Citizen</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "145",
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
    FormName: "Derma Supplies",
  },
  {
    ItemGrpCode: "146",
    FormPath: () => <div>Dermatology</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "147",
    FormPath: () => <div>Nutrition</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "148",
    FormPath: () => <div>Professional Fees - x</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "149",
    FormPath: () => <div>Professional Fee - Ent</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "150",
    FormPath: () => <div>Rehab Med</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "151",
    FormPath: () => <div>Treatment Room</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "152",
    FormPath: () => <div>Vaccination Package</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "153",
    FormPath: () => <div>Dental</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "154",
    FormPath: () => <div>Cards</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "155",
    FormPath: () => <div>Insurance</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "156",
    FormPath: () => <div>Integrative Medicine</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "157",
    FormPath: () => <div>Repairs and Maintenance</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "158",
    FormPath: () => <div>Utilities</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "159",
    FormPath: () => <div>Minor Equipment</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "121",
    FormPath: () => <div>Hospital Services</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "122",
    FormPath: () => <div>Other Hospital Services</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "123",
    FormPath: () => <div>Use Of Facilities</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "124",
    FormPath: () => <div>Sales Of Goods - Meds</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "125",
    FormPath: () => <div>Sales Of Goods - Meds (Vat Ex)</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "126",
    FormPath: () => <div>Sales Of Goods - Non-Meds</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "127",
    FormPath: () => <div>Sales Of Goods - Non-Meds (Vat Ex)</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "128",
    FormPath: () => <div>Professional Fees</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "129",
    FormPath: () => <div>Consultation Fees (Md Share)</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "130",
    FormPath: () => <div>Readers Fees</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "160",
    FormPath: () => <div>Conduction</div>,
    FormName: "",
  },
  {
    ItemGrpCode: "161",
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
    FormName: "Grocery Supply",
  },
];

export default FORM_MODE;
