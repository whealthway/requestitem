import React from 'react'

const Button = ({button_name, children}) => {
  return (
    <div>
      <button 
        onClick={()=> {}} // add function pointed to API
        className='h-8 w-40 p-2 bg-blue-400 outline-none border-solid shadow-lg rounded-md hover:scale-100 items-center'>
        {button_name}{children}
      </button>
    </div>
  )
}

export default Button
