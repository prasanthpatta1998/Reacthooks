import React,{memo} from 'react'

const Text = ({vivoPrice, mobile}) => {

    console.log(`${mobile} Price ${vivoPrice}`)

  return (
    <div>{vivoPrice}</div>
  )
}

export default memo(Text)