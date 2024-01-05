import React, { useEffect } from 'react'
import { useRef } from 'react'

export default function useRefPro() {
  const divRef = useRef(null)

  const inputRef=useRef(null)
  const changeColor = () => {
    divRef.current.style.backgroundColor = "red"
    divRef.current.style.color = "white"
    divRef.current.style.innertext = "Riya "
    inputRef.current.value="please enter"

  }
 

  return (
    <>
      <div style={{ width: "100px", height: "100px", backgroundColor: "black" }} ref={divRef}></div>
      <button className=' btn btn-danger' onClick={changeColor}>Click here</button>
      <input ref={inputRef} type="text" />
    </>

  )
}
