import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  const add = () => {
    localStorage.setItem("user", JSON.stringify({ user: "user",type:"user" }));
    // localStorage.setItem("user",JSON.stringify({ user: "user", type: "employe" }))
    // localStorage.setItem("user",JSON.stringify({ user: "user", type: "admin" }))
    // localStorage.setItem("user",JSON.stringify({ user: "user", type: "superadmin" }))

  };
  const remove = () => {
    localStorage.removeItem("user");
  };
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <ul style={{ listStyle: "none", display: "flex ", gap: "10px" }}>
            <li
              style={{
                backgroundColor: "black ",
                padding: "10px",
                color: "white",
              }}
              className=" rounded-3"
              role="button"
            >
              <NavLink to={"/Superadmin"}> Superadmin</NavLink>
            </li>
            <li
              style={{
                backgroundColor: "black ",
                padding: "10px",
                color: "white",
              }}
              className=" rounded-3"
              role="button"
            >
              <NavLink to={"/admin"}>admin</NavLink>
            </li>
            <li
              style={{
                backgroundColor: "black ",
                padding: "10px",
                color: "white",
              }}
              className=" rounded-3"
              role="button"
            >
              <NavLink to={"/employe"}>employe </NavLink>
            </li>
            <li
              style={{
                backgroundColor: "black ",
                padding: "10px",
                color: "white",
              }}
              className=" rounded-3"
              role="button"
            >
              <NavLink to={"/user"}>user </NavLink>
            </li>
            <li
              style={{
                backgroundColor: "black ",
                padding: "10px",
                color: "white",
              }}
              className=" rounded-3"
              role="button"
            >
              <NavLink to={"/home"}>Home </NavLink>
            </li>
          </ul>
        </div>

        <div style={{ gap: "5px" }}>
          <Button onClick={() => add()}>Login</Button>
          <Button onClick={() => remove()}>Logout</Button>
        </div>
      </div>
    </>
  );
}
