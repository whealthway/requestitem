import React from "react";
import Select from "react-select";

const SelectField = ({
  field,
  data,
  code_key,
  value_key,
  setSelectedItemGroup = () => {},
  placeholder,
}) => {
  const options = data.map((item, index) => {
    return {
      value: item[code_key],
      label: item[value_key],
    };
  });

  return (
    <Select
      {...field}
      value={options.label}
      options={options}
      onChange={(selectedOption) => {
        field.onChange(selectedOption);
        setSelectedItemGroup(selectedOption.value);
      }}
      isSearchable
      placeholder={placeholder}
      className="text-[21px] h-11 w-80 shadow-lg shadow-slate-300"
    />
  );
};

export default SelectField;
