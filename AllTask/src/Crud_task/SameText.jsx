import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

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
    <h1>input 1</h1>
    <input className="p-2" value={city}type="text" onChange={(e)=>getData(e)}/>
    <h1>Input 2</h1>
    <input className="p-2" value={city}type="text" onChange={(e)=>getData(e)}/>
    <Button className="w-100"outline color="danger"  onClick={addData}>
        Add city name
    </Button>

    <Form>
  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={2}
    >
      Email
    </Label>
    <Col sm={10}>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="with a placeholder"
        type="email"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="examplePassword"
      sm={2}
    >
      Password
    </Label>
    <Col sm={10}>
      <Input
        id="examplePassword"
        name="password"
        placeholder="password placeholder"
        type="password"
      />
    </Col>
  </FormGroup>
  
</Form>

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
