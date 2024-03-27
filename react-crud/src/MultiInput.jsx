import React, { useState } from 'react'

export default function MultiInput() {
   
    const[data,AllData]=useState(
        {
         city:"",
         State:"",
         pincode:""
        }
    )
    const[user,Alluser]=useState(
    

    )
    const addData=()=>{

    }
    
  return (
    <div>
      <Form className="border border-dark p-3 rounded-3">
        <FormGroup>
          <Label for="add city">city</Label>
          <Input
            id="exampleEmail"
            name="city"
            placeholder="Enter your email"
            type="city"
            onChange={(e) => data({ ...data, city: e?.target?.value })}
            
          />
        </FormGroup>
        <FormGroup>
          <Label for="City">State</Label>
          <Input
            id="State"
            placeholder="Enter your city"
            type="city"
            onChange={(e) => data({ ...data, State: e?.target?.value })}
            
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">pincode</Label>
          <Input
            id="examplePassword"
            name="pincode"
            placeholder="Enter your pioncode"
            type="pincode"
            onChange={(e) => data({ ...data, pincode: e?.target?.value })}
          />
        </FormGroup>
        <Button onClick={(e) => addData(e)} className="w-100" color="danger">
          Submit
        </Button>
      </Form>  
    </div>
  )
}
