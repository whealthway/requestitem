import React from "react";
import Select from "react-select";

const SelectField = ({
  field,
  data,
  code_key,
  value_key,
  setState = () => {},
  placeholder,
}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "",
      borderRadius: "5px", // Rounded corners
      borderWidth: "1px",
      borderColor: state.isFocused ? "rgb(59, 130, 246)" : "rgb(209, 213, 219)", // Focus color
      boxShadow: state.isFocused ? "0 0 5px rgba(59, 130, 246, 0.5)" : "none",
      "&:hover": {
        borderColor: "rgb(59, 130, 246)",
      },
      width: "270px",
      height: "3rem",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "rgb(59, 130, 246)" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "rgb(219, 234, 254)",
        color: "black",
      },
      width: "270px",
    }),
    // dropdownIndicator: (provided) => ({
    //   ...provided,
    //   display: "none",
    // }),
  };

  const options = data.map((item, index) => {
    return {
      value: item[code_key],
      label: item[value_key],
    };
  });

  const handleOnchage = (field, selectedOption) => {
    field.onChange(selectedOption);
    setState(selectedOption.value);
  };

  return (
    <Select
      {...field}
      value={options.label}
      options={options}
      onChange={(selectedOption) => handleOnchage(field, selectedOption)}
      isSearchable
      placeholder={placeholder}
      styles={customStyles}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default SelectField;
