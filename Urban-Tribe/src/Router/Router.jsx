import React from 'react'
import { BrowserRouter, Routes ,Route  } from 'react-router-dom'
import Header from '../ui/Component/Header/Header'
import Footer from '../ui/Component/Footer/Footer'
import Home from '../ui/Pages/Common/home/Home'
import Login from '../ui/Pages/auth/Login/Login'
import RegisterPage from '../ui/Pages/auth/Register/Register'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                   
                    <Route path="/" Component={Home} />
                    <Route path="/login" Component={Login} />
                    <Route path="/register" Component={RegisterPage}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}