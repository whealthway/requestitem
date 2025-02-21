import React from 'react'
import Label from '../custom/Label'
import InputField from '../custom/InputField'
import Grid from '../custom/Grid'
import Button from '../custom/Button'
import ItemName from './component/ItemName'
import TestAddField from './TestAddField'

const CreateRequestItem = () => {
  
  return (
    <div className='w-full space-y-4 min-w-[770px]'>
      <div className='flex flex-wrap space-x-2 space-y-2'>
          <Label label_name={"Search Item"} />
          <InputField />
          <Button button_name={"Search"}/>
      </div>
      <Grid column_count={4}>
        <div className=''>
          <Label label_name={"Requested by"} />
          <InputField />
        </div>
        <div>
          <Label label_name={"Qualimed BU"} />
          <InputField />
        </div>
      </Grid>
      {/* <ItemName /> */}
      <TestAddField />
      <div className='grid grid-cols-3 gap-4'>
        <div className='grid'>
          <Label label_name={"Receptacle"} />
          <InputField />
        </div>
        <div className='grid'>
          <Label label_name={"MFG"} />
          <InputField />
        </div>
        <div className='grid'>
          <Label label_name={"Other Descriptors"} />
          <InputField />
        </div>
      </div>
    </div>
  )
}

export default CreateRequestItem
