import React, { useState } from 'react'
import { Button } from 'reactstrap';

export default function SingleInput() {
let[city,setCity]=useState("");
let[allcity,setAllCity]=useState([]);
const getData=(eleData)=>{
    
    setCity(eleData?.target?.value);
    
};
const addData=()=>{
    setAllCity([...allcity,city])
    setCity("")
};


  return (
    <>
    <h1>{city}</h1>
    <input className="p-5" value={city}type="text" onChange={(e)=>getData(e)}/>
    <Button className="w-100"outline color="danger"  onClick={addData}>
        Add city name
    </Button>
    <div>
        {
            allcity.map((e,i)=>{
                return<h1 key={i}>{e}</h1>
            })
        }
    </div>
    </>
  )
}
