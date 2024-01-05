import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";

import SuperAdmin from "./SuperAdmin";
import Employe from "./Employe";
import User from "./User";
import Homee from "./Homee";
import Header from "./Header";
import {
  AdminProtected,
  EmployeProtected,
  ProtectedRoute,
  SuperAdminprotected,
} from "./ProtectedRoute";

export default function Routerrr() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "lightgray",
          }}
          className="d-flex justify-content-center align-items-center "
        >
          <Routes>
            <Route
              path="/home"
              element={<Homee />}
            />
            <Route path="/Superadmin" element={<SuperAdminprotected component={<SuperAdmin/>} />} />
            <Route
              path="/admin"
              element={<AdminProtected component={<Admin />} />}
            />
            <Route
              path="/employe"
              element={<EmployeProtected componentsone={<Employe />} />}
            />
            <Route
              path="/user"
              element={<ProtectedRoute components={<User />} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
