import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

const initialUser = {
    name: "",
    email: "",
    number: "",
    password: "",
    age: "",
};
const initialAddress = {
    add: "",
    city: "",
    state: "",
    pinCode: "",
};

export default function RegisterTask() {
    let [user, setUser] = useState(initialUser);
    let [allUser, setAllUser] = useState([])
    let [address, setAddress] = useState(initialAddress);
    let submitHandler = () => {
        setAllUser([...allUser, user])
       // console.log("---->")
    }
    const handleAddressChange = (e) => {
        //onChange={(e) => setAddress({ ...user, add: e?.target?.value })}
        const addressText = e.target.value;
        setUser({ ...user, add: addressText }); // Update user state
        setAddress({ ...address, add: addressText,city: addressText}); // Update address state
      };

      
    return (
        <div className="d-flex flex-column align-items-center p-4">
            <h1>User Register Form</h1>
            <hr style={{ width: "50%" }} />
            <Form className="w-100 border p-4 rounded-2">
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        id="name"
                        placeholder="Enter your name"
                        value={user?.name}
                        onChange={(e) => setUser({ ...user, name: e?.target?.value })}
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        id="email"
                        placeholder="Enter your email"
                        value={user?.email}
                        onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">password</Label>
                    <Input
                        id="password"
                        placeholder="Enter your password"
                        value={user?.password}
                        onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                        type="password"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="number">Number</Label>
                    <Input
                        id="number"
                        placeholder="Enter your number"
                        value={user?.age}
                        onChange={(e) => setUser({ ...user, age: e?.target?.value })}
                        type="number"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                        id="age"
                        placeholder="Enter your age"
                        value={user?.age}
                        onChange ={(e)=>setUser({ ...user, age: e?.target?.value })}
                        type="number"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="add">Address</Label>
                    <Input
                        placeholder="Enter your age"
                        id="add"
                        name="text"
                        onChange={handleAddressChange}
                        type="textarea"
                    />
                </FormGroup>
                <Button color="danger" className="w-100" onClick={submitHandler}>
                    Submit
                </Button>
            </Form>
            <Table className="w-100" striped>
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>NAme</th>
                        <th>email</th>
                        <th>number</th>
                        <th>
                            password
                        </th>
                        <th>age</th>
                        <th>age</th>
                        <th>Address</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {allUser.map((e, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.number}</td>
                                <td>{e.password}</td>
                                <td>{e.age}</td>
                                <td>{e.age}</td>
                                <td>{e.add}</td>
                                
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}