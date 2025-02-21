import React from 'react'
import Label from '../custom/Label'
import InputField from '../custom/InputField'
import Grid from '../custom/Grid'
import Button from '../custom/Button'
import ItemName from './component/ItemName'

const CreateRequestItem = () => {
  return (
    <div className='w-full space-y-4'>
      <div className='flex flex-wrap space-x-4'>
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
      <ItemName />
    </div>
  )
}

export default CreateRequestItem
