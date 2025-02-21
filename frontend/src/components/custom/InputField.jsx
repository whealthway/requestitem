import React from 'react'

const InputField = () => {
  return (
      <input
        type='text'
        placeholder='input'
        id='search_item'
        name='search_item'
        className='h-8 w-50 p-2 text-[16px] outline-none border border-gray-300 shadow-lg rounded-md'> 
      </input>
  )
}

export default InputField
