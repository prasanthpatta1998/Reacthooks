import React,{memo} from 'react'

const Button = ({mobilePrice, mobile}) => {

    console.log(`${mobile} in Button`)
    const handleParent = () => {
        mobilePrice()
    }

  return (
    <div><button onClick={handleParent}>Click Price For {mobile}</button></div>
  )
}

export default memo(Button)