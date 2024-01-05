import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function UseStatepratices() {
    let[Count,SetCount]=useState(0);

    const increment=()=>{
        // console.log("..........")
        SetCount(Count +1 )
    }
  return (
    <>
    <h1> count is:{Count}</h1>
    <h1>
     USeState Example
    </h1>
    <Button className='btn btn-danger'p-5 onClick={()=>increment()}> increment </Button>
    </>
  )
}

