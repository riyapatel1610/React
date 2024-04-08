import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import cart_icon from '../Images/cart_icon.png'
import { IoCartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button, Nav, NavItem } from "reactstrap";
import RegisterModal from '../Model/RegisterModal'
import LoginModal from '../Model/LoginModal';

import { logOut } from '../../../redux/fetures/auth/authSlice';
import { useSelector } from 'react-redux';


export default function Navbar() {
    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);

    const loginData = JSON.parse(localStorage.getItem("logData")) || []
    const data = useSelector(store => store?.authSlice)
    const navigate = useNavigate()

    const loginToggle = () => setLoginModal(!loginModal);
    const registerToggle = () => setRegisterModal(!registerModal);

    const logoutHandler = () => {
        localStorage.setItem("logData", JSON.stringify([]))
        navigate("/")
    }
    return (
        <>
            <LoginModal
                toggle={loginToggle}
                modal={loginModal}
                registerToggle={registerToggle}
            />
            <RegisterModal
                toggle={registerToggle}
                modal={registerModal}
                login={loginToggle}
            />
            <RegisterModal modal={registerModal} toggle={registerToggle} loginToggle={loginToggle} />
            <LoginModal modal={loginModal} toggle={loginToggle} registerToggle={registerToggle} />
            <div className='navbar'>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="nav-menu">
                    {data?.user?.userType !== "admin" ? (<>

                        <NavItem>
                            <NavLink to={"/"}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/Category"} >Category</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/UncutDiamond"} >Uncut Diamond</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/About"} >About</NavLink>
                        </NavItem>
                    </>
                    ) : (
                        <>
                         
                            <NavLink to={"/admin"}>Admin</NavLink>
                            <NavLink to={"/dashboard"}>dashboard</NavLink>
                            <NavLink to={"/product"}>Product</NavLink>
                            <NavLink to={"/profile"}>profile</NavLink>
                          
                        </>
                    )}
                </ul>
                <div className="nav-login-cart">
                    {Object.keys(loginData).length > 0 ?
                        (<Button onClick={logoutHandler}>Log out</Button>
                        )
                        : (<Button className='bbtn-colour' onClick={loginToggle}>Log in</Button>)
                    }
                </div>
                <div className="nav-login-cart">
                    <IconContext.Provider value={{ className: "shared-class", size: 40, color: "white" }}>
                        <>
                        <NavLink to={"/cart"}><IoCartOutline /></NavLink>
                            {/* <Link to='/Card'><IoCartOutline /></Link> */}
                        </>
                    </IconContext.Provider>

                    <div className="nav-cart-count">0</div>

                </div>
            </div>
        </>
    )
}
