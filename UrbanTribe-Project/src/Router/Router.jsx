import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";

// files
import Header from "../ui/Component/Header/Header";
import Footer from "../ui/Component/Footer/Fotter";
import Login from "../ui/Pages/Auth/Signin/Login";
import AddToCart from "../ui/Pages/Auth/AddToCart";
import Home from "../ui/Pages/Common/Home/Home";
import Register from "../ui/Pages/Auth/Register/Register";
import Product from "../ui/Pages/Admin/Product/Product";
import User from "../ui/Pages/Admin/User/User";
import Order from "../ui/Pages/Admin/Order/Order";
import store from '../redux/app/store'
import Account from "../ui/Pages/Admin/Account/account";

export default function Router() {
  return (
    <>
      <Provider store={store}> {/* Wrap your component tree with Provider */}
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/addtocart" element={<AddToCart />} />

              {/* --------ADMIN--------- */}
              <Route path="/admin-product" element={<Product />} />
              <Route path="/admin-user" element={<User />} />
              <Route path="/admin-order" element={<Order />} />
              <Route path="/account" element={<Account />} />
            </Routes>
            <Footer />
            <ToastContainer />
          </BrowserRouter>
        </CookiesProvider>
      </Provider>
    </>
  );
}
