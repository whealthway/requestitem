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
        field.onChange(selectedOption.value);
        setSelectedItemGroup(selectedOption.value);
      }}
      isSearchable
      placeholder={placeholder}
      className="p-2 text-[21px] h-12 w-80"
    />
  );
};

export default SelectField;
