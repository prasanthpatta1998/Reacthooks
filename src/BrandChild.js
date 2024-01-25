import React, { useContext, memo, useDebugValue } from 'react'
import { ReactContext } from './App'

const BrandChild = () => {

    const child = useContext(ReactContext)
    console.log("Child ===>",child)

    useDebugValue(`Child Value ===> ${child}`)

    const styleColor = child.background ? "green" : "black"

  return (
    <div style={{background:`${styleColor}`, height:'50px'}}>
        <input value={child.brand} onChange={(e) => child.handleBrandChange(e)}/>
        <button onClick={() => child.changeBackground()}>Click</button>
    </div>
  )
}

export default memo(BrandChild)