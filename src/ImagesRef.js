import React, { useRef } from "react";

const ImagesRef = () => {
  const imageRef = useRef(null);

  const scrollToIndex = (index) => {
    const listNode = imageRef.current

    const imgNode = listNode.querySelectorAll('li > img')[index]
    console.log("Image Node ===>", imgNode)
    imgNode.scrollIntoView({
        behavior : 'smooth',
        block : 'nearest',
        inline : 'center'
    })
  }

  return (
    <>
      <nav style={{display:'flex', justifyContent:'center'}}>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul style={{display:'flex'}} ref={imageRef}>
          <li>
            <img src="https://placekitten.com/g/200/200" alt="Tom" width={600}/>
          </li>
          <li>
            <img src="https://placekitten.com/g/300/200" alt="Maru" width={600}/>
          </li>
          <li>
            <img src="https://placekitten.com/g/250/200" alt="Jellylorum" width={600}/>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ImagesRef;
