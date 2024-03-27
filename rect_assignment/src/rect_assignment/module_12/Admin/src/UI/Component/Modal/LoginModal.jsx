import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

let initialData = {
    email: "",
    password: "",
    userType: "User"
}
export default function LoginModal({ modal, toggle, registerToggle }) {
    let [loginData, setloginData] = useState(initialData)

    const addData = (e) => {
        e.preventDefault()
        let storedData = JSON.parse(localStorage.getItem("regData")) || []
        let matchUser = storedData.find((e) => e.email === loginData.email && e.userType === loginData.userType)

        if (matchUser) {
            localStorage.setItem("loginData", JSON.stringify(matchUser))
            toggle()
            setloginData(initialData)
        } else {
            
            let matchData = storedData.find((e) => e.email === loginData.email)
          

            if (matchData) {
                if (matchData.userType !== loginData.userType) {
                    alert("Please enter valid usertype")
                }
            } else {
                return alert("please enter valid email")

            }
        }
    }

    const createAcoount = () => {
        registerToggle()
        toggle()
       
    }

    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Login Form</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                value={loginData.email}
                                onChange={(e) => setloginData({ ...loginData, email: e?.target?.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">
                                Password
                            </Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="password placeholder"
                                type="password"
                                value={loginData.password}
                                onChange={(e) => setloginData({ ...loginData, password: e?.target?.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                                Select
                            </Label>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                value={loginData.userType}
                                onChange={(e) => setloginData({ ...loginData, userType: e?.target?.value })}
                            >
                                <option>
                                    User
                                </option>
                                <option>
                                    Admin
                                </option>
                                <option>
                                    Employee
                                </option>
                            </Input>
                        </FormGroup>
                        <p>New Registration ? <span onClick={createAcoount} role='button' style={{ color: "#5383d3" }}>Create an account</span></p>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={addData}>
                        Submit
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                    cancel 
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}