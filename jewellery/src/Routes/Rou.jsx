import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopCategory from '../Pages/ShopCategory'
import Product from '../Pages/Product'
import LoginSignup from '../Pages/LoginSignup'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Pages/Home/Home'
import Cart from '../Pages/Cart'
import Register from '../Pages/Register/Register'
import PProduct from '../Pages/Admin/Product/PProduct'
import Footer from '../Components/Footer/Footer'


export default function Rou() {
    return (
        <div>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route>
                        <Route path='/' element={<Home />} />
                        <Route path='/Category' element={<ShopCategory />} />
                        <Route path='/Uncut Diamond' element={<ShopCategory category="Uncut Diamond" />} />
                        <Route path='/About us' element={<ShopCategory />} />
                        <Route path='/special collections' element={<ShopCategory category="special collections" />} />
                        <Route path='/product' element={<Product />} />
                        <Route path=':productId' element={<Product />} />
                    </Route>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<LoginSignup />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/Admin' element={<PProduct category="Admin" />} />
                   


                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}
