import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from '../ui/Component/Header/Header'
import Footer from '../ui/Component/Footer/Footer'
import Home from '../ui/Pages/Common/home/Home'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Home/>
                {/* <Routes>
                </Routes> */}
                
            </BrowserRouter>
        </>
    )
}