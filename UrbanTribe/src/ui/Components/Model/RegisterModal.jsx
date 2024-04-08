import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/fetures/auth/authSlice";

const initialData = {
  email: "",
  password: "",
  conPassword: "",
  // userType: "User",
  name: "",
  number: "",
  age: "",
};

const initialAddress = {
  add: "",
  city: "",
  state: "",
  pinCode: "",
};

export default function RegisterModal({ toggle, modal }) {
  const [newUser, setNewUser] = useState(initialData);
  const [addData, setAddData] = useState(initialAddress);
  const [showPass, setShowPass] = useState(false);
  const [confirmPassword,setConfirmPassword]=useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const showPasswordHandler = () => {
    setShowPass(!showPass);
  };

  const showConPass = () => {
    setConfirmPassword(!confirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.password !== newUser.conPassword)
      return toast.error("Password and confirm password does not match");

    axios({
      method: "post",
      url: "http://localhost:9999/user/signup",
      data: { ...newUser, address: [addData] },
    })
      .then((res) => {
        dispatch(login(res.data));
        toast.success("Registration successful!");
        toggle();
        setNewUser(initialData);
        setAddData({
          add: "",
          city: "",
          state: "",
          pincode: "",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        toast.error("Registration failed. Please try again later.");
      });
  };

  function signIn() {
    login();
    toggle();
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <b>Registration Form</b>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Row>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter Email"
                  type="text"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      email: e.target.value.toLowerCase(),
                    })
                  }
                />
              </FormGroup>
            </Row>
            {/* <FormGroup>
                <Label for="userType">User type</Label>
                <Input
                  type="select"
                  name="userType"
                  id="userType"
                  value={newUser.userType}
                  onChange={(e) =>
                    setNewUser({ ...newUser, userType: e.target.value })
                  }
                >
                  <option>user</option>
                  <option>admin</option>
                </Input>
              </FormGroup> */}
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                id="exampleName"
                name="name"
                placeholder="Enter Name"
                type="text"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleNumber">Number</Label>
              <Input
                id="exampleNumber"
                name="number"
                placeholder="Enter Number"
                type="number"
                value={newUser.number}
                onChange={(e) =>
                  setNewUser({ ...newUser, number: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAge">Age</Label>
              <Input
                id="exampleAge"
                name="age"
                placeholder="Enter Age"
                type="number"
                value={newUser.age}
                onChange={(e) =>
                  setNewUser({ ...newUser, age: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                id="exampleAddress"
                name="address"
                placeholder="Enter Address"
                type="text"
                value={addData.add}
                onChange={(e) =>
                  setAddData({ ...addData, add: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input
                id="exampleCity"
                name="city"
                placeholder="Enter City"
                type="text"
                value={addData.city}
                onChange={(e) =>
                  setAddData({ ...addData, city: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input
                id="exampleState"
                name="state"
                placeholder="Enter State"
                type="text"
                value={addData.state}
                onChange={(e) =>
                  setAddData({ ...addData, state: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePincode">Pincode</Label>
              <Input
                id="examplePincode"
                name="pincode"
                placeholder="Enter Pincode"
                type="number"
                value={addData.pincode}
                onChange={(e) =>
                  setAddData({ ...addData, pincode: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <div
                style={{
                  display: "flex",
                  border: "1px solid black",
                  borderRadius: "5px 5px",
                }}
              >
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Enter password"
                  type={showPass ? "******" : "password"}
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
                <span
                  onClick={showPasswordHandler}
                  style={{ marginTop: "5px" }}
                >
                  {showPass ? <EyeOffIcon /> : <EyeIcon />}
                </span>
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">conPassword</Label>
              <div
                style={{
                  display: "flex",
                  border: "1px solid black",
                  borderRadius: "5px 5px",
                }}
              >
                <Input
                  id="examplePassword"
                  name="conpassword"
                  placeholder="Enter conPassword"
                  type={confirmPassword ? "******" : "password"}
                  value={newUser.conPassword}
                  onChange={(e) =>
                    setNewUser({ ...newUser, conPassword: e.target.value })
                  }
                />
                <span
                  onClick={showConPass}
                  style={{ marginTop: "5px" }}
                >
                  {confirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                </span>
              </div>
            </FormGroup>
            <p>
              Already have an account?
              <span
                role="button"
                style={{ color: "#e6581c", cursor: "pointer" }}
                onClick={signIn}
              >
                Sign in...!
              </span>
            </p>
            <Button
              style={{
                backgroundColor: "#000041",
                color: "white",
                border: "none",
                fontWeight: "bold",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              className="w-100"
              type="submit"
            >
              Register
            </Button>
            <Button color="danger" className="w-100" onClick={toggle}>
              Cancel
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
