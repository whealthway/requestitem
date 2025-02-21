import React from 'react'

const Grid = ({column_count, children}) => {
    const col_cnt = "grid-cols-" + column_count
  return (
    <div className={`grid w-[100%] md:grid-cols-2 grid-cols-1 space-y-2`}>
      {children}
    </div>
  )
}

export default Grid
