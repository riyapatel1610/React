import React, { useEffect, useState } from "react";
// import "./Login.css";
import { Button, Form, Input, Label } from "reactstrap";
import { NavLink,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Loginn() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const [locall, setLocall] = useState(null);
  let  navigate=useNavigate()

  const addData = (e) => {
    e.preventDefault();
    if (value.email.trim() === "" || value.password.trim() === "") {
      toast.error("Please fill up all fields");
      return;
    }

    const emailMatch = locall?.some?.((e) => e?.email === value?.email);
    const passwordMatch = locall?.some?.((e) => e?.password === value?.password);

    if (!emailMatch || !passwordMatch) {
      toast.error("Your email or password is incorrect. Please register if you haven't.");
      return;
    }

    setData([...data, value]);
    setValue({
      email: "",
      password: "",
    });
    navigate("/")
    toast.success("login Succesfully")
    localStorage.setItem("local", JSON.stringify([...data, value]));
  };

  useEffect(() => {
    const json = localStorage.getItem("add");
    const normal = JSON.parse(json);
    setLocall(normal);
  }, []);

  return (
    <div className="box" style={{ marginTop: "80px" }}>
      <span className="borderline"></span>
      <Form className="border border-1 w-25 m-auto my-4 p-3 rounded-2" style={{ boxShadow: "0px 0px 3px" }}>
        <h2>Login</h2>
        <div className="inputbox mt-3">
          <Label>Email</Label>
          <Input
            required
            id="exampleEmail"
            name="email"
            placeholder="Enter your email"
            type="email"
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
        </div>
        <div className="inputbox mt-3">
          <Label>Password</Label>
          <Input
            required
            id="examplePassword"
            name="password"
            placeholder="Enter your password"
            type="password"
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
        </div>
        <Button className="mt-3 bg-danger w-100" onClick={addData}>
          Submit
        </Button>
        <p className="mt-3 text-center">
          Don't have an account? <NavLink to={"/register"}>sign up</NavLink>
        </p>
      </Form>
    </div>
  );
}