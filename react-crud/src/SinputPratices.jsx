import React from 'react'
import { Button } from 'reactstrap';
import { useState } from 'react';

import { toast } from "react-toastify";
 


export default function SinputPratices() {
    let [Email,SetEmail]=useState("")
    let [AllEmailData,SetAllEmailData]=useState([])

const GetData=(e)=>{
        SetEmail(e?.target?.value);

}
const DisplayEmail=()=>{
    if(Email.length>0){
    SetAllEmailData([...AllEmailData,Email])
    SetEmail("")
    toast.success("data added Sucessfully")
    }
    else{
        toast.error("data not added"); 
    }
}



  return (
  <>
 
   <input value={Email} type="text" onChange={(e)=>(GetData(e))} />
   <Button color="warning"onClick={DisplayEmail}>Add your email Address</Button>
   <div>
    {
        AllEmailData.map((e,i)=>{
            return <h1 className=' border border-dark' key={i}>
                {e}
            </h1>
        })
    }
   </div>
   </>
  )
}


