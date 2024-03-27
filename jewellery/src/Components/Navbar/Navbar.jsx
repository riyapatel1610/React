import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import cart_icon from '../Images/cart_icon.png'
import { IoCartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {
    const [menu, setMenu] = useState("Home")
    return (
        <>
            <div className='navbar'>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="nav-menu">
                    <li onClick={() => { setMenu("Home") }}><Link to ='/'>Home</Link>{menu === "Home" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("Category") }} ><Link to ='/Category'>Category</Link>{menu === "Category" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("Uncut Diamond") }} ><Link to='/Uncut Diamond'>Uncut Diamond</Link>{menu === "Uncut Diamond" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("About us") }} ><Link to ='/About us'>About us</Link>{menu === "About us" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("special collections") }} ><Link to ='/special collection'></Link>{menu === "special collections" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("Admin") }} ><Link to ='/admin-product'></Link>{menu === "admin-product" ? <hr /> : <></>}</li>
                </ul>
                <div className="nav-login-cart">
                   <Link to='/login'><button>Login</button></Link>
                    <IconContext.Provider value={{ className: "shared-class", size: 40   ,color:"white"}}>
                        <>
                        <Link to ='/Card'><IoCartOutline /></Link>
                        </>
                    </IconContext.Provider>

                    <div className="nav-cart-count">0</div>
                </div>
            </div>
        </>
    )
}
