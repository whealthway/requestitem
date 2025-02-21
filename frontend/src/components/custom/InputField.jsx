import React from 'react'

const InputField = ({type, name, value, onchange, placeholder=''}) => {
  return (
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={onchange}
        className='h-8 w-50 p-2 text-[16px] outline-none border border-gray-300 shadow-lg rounded-md'> 
      </input>
  )
}

export default InputField
