import React,{memo} from 'react'

const Title = () => {
    console.log("Title Component")

  return (
    <div>Title Of Component</div>
  )
}

export default memo(Title)