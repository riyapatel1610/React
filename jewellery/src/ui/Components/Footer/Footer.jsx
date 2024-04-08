import React from 'react'
import './Footer.css'
import footer_logo from '../Images/logo.png'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
  <div className="footer">
    <div className="footer-logo">
        <img src={footer_logo} alt="" />
    
    </div>
    <ul className="footer-links">
        <li>Comapany</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
   
    
    <div className="footer-social-icon">
        <div className="footer-icons-container">
        <FaSquareInstagram />
        </div>
        <div className="footer-icons-container">
        <FaPinterest />
        </div>
        <div className="footer-icons-container">
        <FaSquareWhatsapp />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>Copyright © 2024 Ashirwaad All Rights Reserved</p>
    </div>
  </div>
  )
}
