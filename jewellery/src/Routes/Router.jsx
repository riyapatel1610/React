import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import navbar from '../ui/Components/Navbar/Navbar'
import Home from '../ui/Pages/common/Home/Home'
// import Footer from '../Components/Footer/Footer'
// import ProtectedRouter from '../Routes/ProtectedRouter'
import Category from '../ui/Pages/common/category/Category'
import UncutDiamond from '../ui/Pages/common/UncutDiamond/UncutDiamond'
import AboutPage from  '../ui/Pages/common/About/AboutPage'
// import Admin from '../ui/Pages/admin/Admin'
import DarshBoard from '../ui/Pages/admin/DarshBoard/DarshBoard'
import Profile from '../ui/Pages/common/ProfileSection/Profile'
import Product from '../ui/Pages/admin/Product/Product'
import ProtectedRoute from './ProtectRouter'
import { Provider } from 'react-redux'
import { store } from '../redux/app/store'
// import Cart from '../ui/Pages/user/cart'
import Navbar from '../ui/Components/Navbar/Navbar'


export default function Router() {
    return (
        <div>

            <BrowserRouter>
                <Provider store={store}>


                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Category' element={<Category />} />
                        <Route path='/UncutDiamond' element={<UncutDiamond />} />
                        <Route path='/Aboutpage' element={<AboutPage />} />
                        {/* <Route path="/admin" element={<Admin />} /> */}
                        <Route path="/protectedRoute" element={<ProtectedRoute profile={<Profile />} />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/dashBoard" element={<DarshBoard />} />
                        <Route path="/cart" element={<Cart />} />


                    </Routes>

                </Provider>
            </BrowserRouter>
        </div>
    )
}
