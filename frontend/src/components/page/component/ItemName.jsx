import React from 'react'
import Label from '../../custom/Label'
import InputField from '../../custom/InputField'
import { IoMdAdd } from "react-icons/io";

const ItemName = () => {
  return (
    <div className='w-[100%] border border-gray-500 p-4'>
        <Label label_name={"Item Name"} />
        <div className=''>
            <button className='flex items-center'>
                <IoMdAdd className='h-8 w-8'/>
                <label htmlFor="" className='sm:visible'>Add generic name and UOM </label> 
            </button>
            {/* <button className='sm:hidden flex items-center'>
                <IoMdAdd className='h-8 w-8'/>
            </button> */}
        </div>
        <div className='space-x-4 space-y-4 items-center place-content-center'>
            <div className=''>
                <Label label_name={"Generic Name"} />
                <InputField />
            </div>
            <div className='border border-gray-300'>
                <label htmlFor="">Unit of Measure</label>
                <div>
                    <Label label_name={"Measure"}   />
                    <InputField />
                    <Label label_name={"UOM"} />
                    <InputField />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemName
