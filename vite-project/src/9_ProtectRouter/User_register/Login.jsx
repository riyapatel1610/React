import React, { useState } from "react";
import { toast } from "react-toastify";
import { Input, Label, Form, FormGroup, Button } from "reactstrap";

export default function Login({ chek }) {
  let [value, setValue] = useState({ email: "", password: "" });

  const chekData = () => {
    
     let main=chek?.find((e) => {
      return e?.email == value?.email && e?.password == value?.password
    });
  if (main) {
    toast.success("data save")
    
  }
  else{
    toast.warn("you are not anable")
  }
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
        <Button className="w-100 mt-3" onClick={() => chekData()}>
          Submit
        </Button>
      </Form>
    </>
  );
}
}