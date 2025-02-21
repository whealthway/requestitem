import React from 'react'

const InputField = () => {
  return (
    <div>
      <input 
        type='text'
        placeholder='Search Item'
        id='search_item'
        name='search_item'
        className='h-8 w-40 p-2 outline-none border-solid shadow-lg rounded-md'> 
      </input>
    </div>
  )
}

export default InputField
