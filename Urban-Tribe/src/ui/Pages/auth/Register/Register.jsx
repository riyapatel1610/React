import React from "react";
import { useState } from "react";

export default function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    age: "",
    address: [],
  });

  const [add, setAdd] = useState({
    add: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { ...registerData, address: [add] };
    setData([details]);
  };

  return (
    <>
      <h2 className="text-center"> CREATE AN ACCOUNT</h2>
      <form className="w-1/2 m-auto mt-4 mb-5 px-4 py-5 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />
          
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">
            Number
          </label>
          <input
            type="number"
            id="number"
            onChange={(e) => setRegisterData({ ...registerData, number: e.target.value })}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />


          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />


          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="text"
            id="text"
            onChange={(e) => setRegisterData({ ...registerData, age: e.target.value })}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />


          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            onChange={(e) => setAdd({ ...add, add: e.target.value })}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />


          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
           City
          </label>
          <input
            type="text"
            id="city"
            onChange={(e) => setAdd({ ...add, city: e.target.value })}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />



          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          state
          </label>
          <input
            type="text"
            id="state"
            onChange={(e) => setAdd({ ...add, state: e.target.value })}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />


          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Pincode
          </label>
          <input
            type="number"
            id="Pincode"
            onChange={(e) => setAdd({ ...add, pinCode: e.target.value })}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />


        </div>
      
        <button
          type="submit"
          className="w-full bg-red-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}
