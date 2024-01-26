import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const ForwardRef = forwardRef((props, ref) => {
  const refValue = useRef(null);
  useImperativeHandle(ref, () => ({
    focusMethod: () => refValue.current.focus()
  }))
  console.log("Child Component")
  return (
    <input ref={refValue}/>
  )
})

export default ForwardRef