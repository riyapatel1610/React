import React, { useState } from 'react'

export default function MultipleInput() {
   const[data,SetData]=useState();
   {
    city:"",
    State:"",
    pincode:"",


   }
  return (
    <div>
     <Form>
  <FormGroup>
    <Label for="exampleEmail">
      city
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      State
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  
  
  <FormGroup>
    <Label for="exampleText">
      pincode
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
  </FormGroup>
  
  
    
    
    
  
  <Button onclick={}>
    Submit
  </Button>
</Form>

    </div>
  )
}
