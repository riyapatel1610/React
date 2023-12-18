import React from 'react'

export default function CrudPratices() {
  return (
    <Form>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input
        value={user.email}
        id="exampleEmail"
        name="email"
        placeholder="with a placeholder"
        type="email"
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input
        value={user.password}
        id="examplePassword"
        name="password"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="password placeholder"
        type="password"
      />
    </FormGroup>
   
      <Button
        onClick={() => {
          updateHandler();
        }}
      
        Update
      </Button>
  
      <Button
        onClick={() => {
          addData();
        }}
      >
        Submit
      </Button>
    }
  </Form>
  
}
