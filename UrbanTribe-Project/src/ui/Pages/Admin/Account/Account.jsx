import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../../../../redux/fetures/auth/authSlice"

export default function Account() {
    let { user } = useSelector((state) => state.authSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        dispatch(logOut());
        navigate("/");
    };
    return (
        <div className="ml-36 mr-36">
            <h1 className="text-center mb-14 text-4xl font-semibold">ACCOUNT</h1>
            <h3 className="font-semibold   text-xl mb-9">ACCOUNT DETAILS</h3>
            <div>
                <ul>
                    <li className="py-3 border-b-2">Name : {user.name || "User"} </li>
                    <li className="py-3 border-b-2">Email : {user.email} </li>
                    <li className="py-3 border-b-2">ADDRESS: </li>
                    <li className="py-3 border-b-2">ADDRESS 2: </li>
                    <li className="py-3 border-b-2">COUNTRY: </li>
                    <li className="py-3 border-b-2">ZIP: </li>
                    <li className="py-3 mb-5 border-b-2">PHONE: </li>
                </ul>
                <button className="p-2 rounded-md border !border-red-600	bg-white text-red-600 hover:text-white hover:bg-red-600" onClick={() => logoutHandler()}>LOGOUT </button>
            </div>
        </div>
    )
}
