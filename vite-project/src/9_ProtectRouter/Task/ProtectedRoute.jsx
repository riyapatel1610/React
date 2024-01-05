import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectedRoute = ({ components, componentsone }) => {
  let navigate = useNavigate();

  useEffect(() => {
    let json = localStorage.getItem("user");
    let normal = JSON.parse(json);
    console.log(normal);
    if (
      !normal ||
      (normal?.type !== "user" &&
        normal?.type !== "employe" &&
        normal?.type !== "admin" &&
        normal.type !== "superadmin"
        )
    ) {
      toast.warn("you are not user");
      navigate("/");
    }
  });
  return (
    <>
      <div>{components}</div>
      <div>{componentsone}</div>
    </>
  );
};

export const EmployeProtected = ({ componentsone }) => {
  let navigate = useNavigate();
  useEffect(() => {
    let json = localStorage.getItem("user");
    let normal = JSON.parse(json);
    console.log("-->", normal);
    if (!normal || (normal?.type !== "employe" && normal?.type !== "admin" && normal.type !== "superadmin")) {
      toast.warn("you are not user");
      navigate("/");
    }
  });
  return <>{componentsone}</>;
};

export const AdminProtected = ({ component }) => {
  let navigate = useNavigate();
  useEffect(() => {
    const json = localStorage.getItem("user");
    const normal = JSON.parse(json);
    console.log(normal);
    if (!normal || (normal.type !== "admin" && normal.type !== "superadmin")) {
      toast.warn("you are not admin");
      navigate("/");
    }
  });
  return (
    <>
      <div>{component}</div>
    </>
  );
};

export const SuperAdminprotected = ({ component }) => {
  let navigate = useNavigate();

  useEffect(() => {
    let json = localStorage.getItem("user");
    let normal = JSON.parse(json);
    if (!normal || normal.type !== "superadmin") {
      toast.warn("you are not Superadmin ");
      navigate("/");
    }
  });
  return <><div>{component}</div></>;
};
