import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function MulIn() {
    let[user,setUser]=useState({
        email:"",
        password:"",
    })
    let [Alluser,SetAllUse]=useState([])
   
    const DisplayData=(e)=>{
        if(user.email.length>0 && user.password.length>0){
            SetAllUse([...Alluser,user])
            toast.success("data added sucefully")
            
        }else{
            toast.error("data not added")
        }

    }
    return (
        <>
            <Form className=" p-5 border border-drak rounded-3">
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="enter a Email"
                        type="email"
                        onChange={(e)=>setUser({...user,email:e?.target?.value})}
                        
                      
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="enter a password"
                        type="password"
                      onChange={(e)=>setUser({...user,password:e?.target?.value})}
                    />
                </FormGroup>
                <Button className="w-100" color="danger" onClick={(e)=>(DisplayData(e))}>
                    Submit
                </Button>
            </Form>
            <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {Alluser.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.password}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
        
    )
}
