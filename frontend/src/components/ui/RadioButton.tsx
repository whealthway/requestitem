import React from 'react'

const RadioButton = ({selectedValue, handleRadioChange, id, value}) => {
  return (
    <input
        type="radio"
        id={id}
        value={value}
        checked={selectedValue === value}
        onChange={handleRadioChange}
    />
  )
}

export default RadioButton