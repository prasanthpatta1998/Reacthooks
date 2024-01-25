import React, { useState } from 'react'
import { useRef } from 'react'
import ForwardRef from './ForwardRef'

const Debouunce = () => {
  const [statrTimer, setStartTimer] = useState(null)
  const[count, setCount] = useState(0)
  const [timer, setTimer] = useState(null)
  const refId = useRef(null)
  const inputRef = useRef(null)

  const handleStart = () => {
    setTimer(Date.now())
    setStartTimer(Date.now())

    clearInterval(refId.current)
    refId.current = setInterval(() => {
      setTimer(Date.now)
    }, 10)
  }

  const handleStop = () => {
    clearInterval(refId.current)
  }

  let secondsPassed = 0;
  if (statrTimer != null && timer != null) {
    secondsPassed = (timer - statrTimer) / 1000;
  }

  const handleFocus = () =>{
    inputRef.current.focus()
    inputRef.current.style.background = 'green'
    setCount(count+1)
  }

  console.log(inputRef)

  return (
    <div>
      <p>Timer: {secondsPassed}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <ForwardRef ref={inputRef} />
      <button onClick={handleFocus}>Focus Element</button>
    </div>
  )
}

export default Debouunce