// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   Form,
//   FormGroup,
//   Label,
//   Input,
// } from "reactstrap";
// import RegisterModal from "./RegisterModal";
// import axios from "axios";
// import { useDispatch } from "react-redux";

// const initialData = {
//   email: "",
//   password: "",
// };

// export default function LoginModal({ modal, toggle, registerToggle }) {
//   const [user, setUser] = useState(initialData);
//   console.log("............................?????????", data)
//   console.log("🚀 ~ LoginModal ~ user:", user);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const storedData = JSON.parse(localStorage.getItem("newUser")) || [];
//   //   const matchingUser = storedData.find(
//   //     (e) => e.email === user.email && e.password === user.password
//   //   );

//   //   if (matchingUser) {
//   //     if (matchingUser.password !== user?.password) {
//   //       return toast.warn("password not match");
//   //     }
//   //     localStorage.setItem("loginUser", JSON.stringify(matchingUser));
//   //     toast.success("Log in Successfully !", {
//   //       position: "top-center",
//   //       autoClose: 10000,
//   //       hideProgressBar: false,
//   //       theme: "light",
//   //     });
//   //     console.log("----log in success--->");
//   //   } else {
//   //     // confirmAlert({
//   //     //   title: "User not found",
//   //     //   message: 'Click "Register" to create an account.',
//   //     //   buttons: [
//   //     //     {
//   //     //       label: "Cancel",
//   //     //       onClick: () => console.log("Alert closed"),
//   //     //     },
//   //     //     {
//   //     //       label: "Register",
//   //     //       onClick: registerToggle,
//   //     //     },
//   //     //   ],
//   //     //   overlayClassName: "custom-overlay",
//   //     // });
//   //     console.log("---log---->");
//   //   }
//   //   setUser(initialData);
//   //   toggle();
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios({
//       method: "post",
//       url: "http://localhost:9999/user/signin",
//       data: data,
//     })
//       .then((res) => {
//         // dispatch(login(res.data));
//         toast.success("User login success");
//         console.log("============>>>>", res.data);
//         // if (res?.data?.data?.userType === "admin") {
//         //   navigate("/dashboard");
//         // } else {
//         //   navigate("/");
//         // }
//       })
//       .catch((err) => {
//         toast.error("Somthing is wrong");
//       });
//   };

//   function createAcoount() {
//     toggle();
//     registerToggle();
//     console.log("=---registr--------->>>");
//   }

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggle} onSubmit={(e) => handleSubmit(e)}>
//         <ModalHeader toggle={toggle}>
//           <b>Log in </b>
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="exampleEmail">Email</Label>
//               <Input
//                 id="exampleEmail"
//                 name="email"
//                 placeholder="Enter Email"
//                 type="text"
//                 onChange={(e) =>
//                   setUser({ ...user, email: e?.target?.value.toLowerCase() })
//                 }
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="examplePassword">Password</Label>
//               <Input
//                 id="examplePassword"
//                 name="password"
//                 placeholder="Enter password"
//                 type="password"
//                 onChange={(e) =>
//                   setUser({ ...user, password: e?.target?.value })
//                 }
//               />
//             </FormGroup>
//             <p role="button" className="text-primary" onClick={createAcoount}>
//               Create account...!
//             </p>
//             <Button
//               style={{
//                 backgroundColor: "#00041",
//                 color: "white",
//                 border: "none",
//                 fontWeight: "bold",
//               }}
//               className="w-100 mt-3 mb-3"
//             >
//               Submit
//             </Button>
//             <Button style={{ backgroundColor: "#e6581c" }} className="w-100">
//               Cancel
//             </Button>
//           </Form>
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios"; 
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../../redux/fetures/auth/authSlice";

const initialData = {
  email: "",
  password: "",
};

export default function LoginModal({ modal, toggle, registerToggle }) {
  const [user, setUser] = useState(initialData);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: user,
    })
      .then((res) => {
        toast.success("User login success");
        console.log("Response data:", res.data);
        dispatch(login(res?.data))
          navigate("/dashboard");

        // if (res?.data?.data?.userType === "admin") {
        // } else {
        //   navigate("/");
        // }
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        toast.error("Something went wrong with login");
      })
      .finally(() => {
        toggle();
      });
  };

  function createAccount() {
    toggle();
    registerToggle();
    console.log("=---registr--------->>>");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>
          <b>Log in </b>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Enter Email"
                type="text"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Enter password"
                type="password"
                onChange={handleInputChange}
              />
            </FormGroup>
            <p role="button" className="text-primary" onClick={createAccount}>
              Create account...!
            </p>
            <Button
              style={{
                backgroundColor: "#00041",
                color: "white",
                border: "none",
                fontWeight: "bold",
              }}
              className="w-100 mt-3 mb-3"
              onClick={handleSubmit} 
            >
              Submit
            </Button>
            <Button
              style={{ backgroundColor: "black" }}
              className="w-100"
              onClick={toggle}
            >
              Cancel
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
