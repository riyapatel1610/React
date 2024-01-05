import React, { useRef } from 'react'
import { useReducer } from 'react'
import { Button } from 'reactstrap'

export default function USeRefPratices() {
    let divRef = useRef(null);
    let inputRef=useRef(null)
    const ChangeColourHandler = () => {
        console.log("----->")
        divRef.current.style.backgroundColor = "red"
        divRef.current.style.innertext = "Hello world"
        inputRef.current.value="plaese enter thr value"

    }
    return (
        <>
            <div ref={divRef} style={{ width: "100px", height: "100px", backgroundColor: "black" }}>

            </div>
            <Button className=' mt-5 btn btn-danger' onClick={() => ChangeColourHandler()}>
                change color </Button>
            <input ref={inputRef} type="text" />
        </>
    )
}
