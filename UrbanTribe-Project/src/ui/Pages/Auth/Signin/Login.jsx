import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from '../../../../redux/fetures/auth/authSlice';

const initialUser = {
  email: "",
  password: "",
};

export default function Login() {
  let [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    console.log('---------------->')
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: user,
    })
      .then((res) => {
        dispatch(login(res.data));
        toast.success("User login success");

        if (res?.data?.data?.userType === "admin") {
          window.scrollTo(0, 0);
          navigate("/")
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error("Somthing is wrong");
      });
  };

  return (
    <div className="flex flex-col py-9 justify-center ">
      <h1 className="text-center pb-10 font-medium text-3xl">
        ALREADY REGISTERED?
      </h1>
      <div className="flex px-24 justify-center">
        <div class="border py-9 px-5 mr-2 flex-1">
          <h3 className="mb-2 font-medium text-xl">NEW CUSTOMER</h3>
          <p className="text-slate-400 text-sm">
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
          </p>
          <button
            type="submit"
            className=" text-sm mt-6 transition-colors duration-500 hover:text-white border-2 border-[#d11e33] py-1 px-3 rounded-md hover:!bg-[#d11e33]	 !bg-white text-[#d11e33] me-4" onClick={() => navigate("/register")}
            >
            CREATE AN ACCOUNT
          </button>
        </div>
        <div className="border px-5 py-9 ml-2 flex-1 ">
          <form  onSubmit={(e) => submitHandler(e)}>
            <h3>LOGIN</h3>
            <p className="text-slate-400 my-3 text-sm	">
              If you have an account with us, please log in.
            </p>
            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                value={user?.email}
              >
                E-MAIL *
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-100 border-none text-gray-900 text-sm rounded-lg focus:ring-red-600  block w-full p-2.5 "
                placeholder="Enter E-mail"
                value={user?.email}
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                required

              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                PASSWORD *
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-100 border-none text-gray-900 text-sm rounded-lg focus:ring-red-600  block w-full p-2.5 "
                placeholder="Enter Password"
                onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                name="text"
                required
              />
            </div>
            <div className="flex justify-between items-end">
              <button
                type="submit"
                className=" text-sm mt-6 transition-colors duration-500 hover:text-white border-2 border-[#d11e33] py-2 px-12 rounded-md hover:!bg-[#d11e33]	 !bg-white text-[#d11e33] me-4"
               >
                Login
              </button>
              <p className="text-red-600 cursor-pointer hover:text-gray-800">Lost your password?</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
