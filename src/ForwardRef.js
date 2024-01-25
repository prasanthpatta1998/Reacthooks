import React, { forwardRef } from 'react'

const ForwardRef = forwardRef((props, ref) => {
  return (
    <input ref={ref}/>
  )
})

export default ForwardRef