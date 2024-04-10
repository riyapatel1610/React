import React from "react";
import { Button } from "flowbite-react";


export default function Login() {
  return (
    <>
    <h1 className="text-center pb-10">ALREADY REGISTERED?</h1>
    <div className="flex">

    <div  class="max-w-sm mx-auto flex-1 ">
      <h3>NEW CUSTOMER</h3>
      <p className="text-slate-400">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
      <Button
            type="submit"
            className="text-red-600	border-red-500 border-1	!bg-white hover:!bg-red-600 hover:!text-white  mx-3 me-4"
          >
            CREATE AN ACCOUNT
          </Button>
    </div>
      <div className="flex-1">
        <form class="max-w-sm mx-auto ">
          <h3>LOGIN</h3>
          <p className="text-slate-400	">If you have an account with us, please log in.</p>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
               E-MAIL *
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter E-mail"
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
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Password"

              required
            />
          </div>
         
          <Button
            type="submit"
            className="text-red-600	border-red-500 border-1 hover:!bg-red-600 hover:!text-white  mx-3 me-4"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
    </>
  );
}
