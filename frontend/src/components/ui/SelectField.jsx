import React from 'react'

const SelectField = ({item_group_data}) => {
  console.log(item_group_data)
  item_group_data.map((data, index) => console.log("code: " + data.code + " " + data.value))
  return (
    <div>
      <select 
        className='h-8 w-40 p-2 text-xs outline-none border border-gray-400 shadow-lg rounded-md'
      > 
        {item_group_data.map((data, index) => {
          <option value={data.code}>
            {data.value}
          </option>
        })
        }
      </select>
    </div>
  )
}

export default SelectField
