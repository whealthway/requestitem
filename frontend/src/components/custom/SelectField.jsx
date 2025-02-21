import React from 'react'

const SelectField = ({item_group_data}) => {
  return (
    <div>
      <select 
        className='h-8 w-40 p-2 text-xs outline-none border border-gray-400 shadow-lg rounded-md'
      > 
        Object.fromEntries(
        Object.entries(jsonObject).map(([key, value]) ={'>'} {
            <option key={key} value={key}>{value}</option>
          })
        );
        {/* {item_group_data.map((, index) =>
          <option key={data.key} value={data.value}>{data.value}</option>
        )} */}
      </select>
    </div>
  )
}

export default SelectField
