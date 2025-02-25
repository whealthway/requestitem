import React from 'react'

const Grid = ({style, children}) => {
  console.log(style)
  return (
    <div className={`${style}`}>
      {children}
    </div>
  )
}

export default Grid
