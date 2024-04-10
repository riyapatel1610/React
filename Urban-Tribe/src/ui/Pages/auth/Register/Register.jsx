import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


export default function RegisterPage() {
  let [RegisterData, setRegisterData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    age: "",
    address: [],
  });
  let [add, setAdd] = useState({
    add: "",
    city: "",
    state: "",
    pinCode: "",
  });
  let [data, setData] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(data)
    const Details = { ...RegisterData, address: [add] };
    setData([Details]);
  };
  return (
    <>  
      <Form className="w-50  m-auto mt-4 mb-5 px-4 py-5 rounded-2  " style={{ boxShadow: "0px 0px 3px" }}>
        <h2 className="text-center"> Register Here</h2>
        <FormGroup>
          <Label for="">Name</Label>
          <Input
            type="text"
            onChange={(e) => setRegisterData({ ...RegisterData, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            onChange={(e) => setRegisterData({ ...RegisterData, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input
            type="number"
            onChange={(e) => setRegisterData({ ...RegisterData, number: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="Password"
            onChange={(e) =>
              setRegisterData({ ...RegisterData, password: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAge">age</Label>
          <Input
            type="number"
            onChange={(e) => setRegisterData({ ...RegisterData, age: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAress">Adress</Label>
          <Input
            type="text"
            onChange={(e) => setAdd({ ...add, add: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCity">City</Label>
          <Input
            type="text"
            onChange={(e) => setAdd({ ...add, city: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleState">state</Label>
          <Input
            type="text"
            onChange={(e) => setAdd({ ...add ,state: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePincode">Pincode</Label>
          <Input
            type="number"
            onChange={(e) => setAdd({ ...add, pinCode: e.target.value })}
          />
        </FormGroup>
        <Button className="w-100 bg-danger" onClick={(e) => SubmitHandler(e)}>
          Submit
        </Button>
       
      </Form>
    </>
  );
}