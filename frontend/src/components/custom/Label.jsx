import React from 'react'

const Label = ({label_name}) => {
  return (
    <label className='mx-4 h-8 w-auto text-[14px]'>
        {label_name}
    </label>
  )
}

export default Label
