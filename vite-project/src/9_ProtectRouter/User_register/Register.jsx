import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { Input, Label } from "reactstrap";

export default function Register() {
  let [value, setValue] = useState({ email: "", password: "" });

  let [data, setData] = useState([]);
  const dataTranse = () => {
    setData([...data, value]);
    localStorage.setItem("data", JSON.stringify([...data, value]));
    setValue({ email: "", password: "" });
  };

 

  return (
    <>
      <Form className="">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
        </FormGroup>
        <Button className="w-100 mt-3" onClick={() => dataTranse()}>
          Submit
        </Button>
        
      </Form>
    

    </>
  );
}
