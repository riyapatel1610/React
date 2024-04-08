import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../UI/Pages/Home';
import About from '../UI/Pages/About';
import Service from '../UI/Pages/Service';
import Contact from '../UI/Pages/Contact';
import Header from '../UI/Component/Header/Header';
import ProtectedRouter from './ProtectedRouter';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<ProtectedRouter Component={<About />} />} />
                    {/* <Route path='/h' element={<Home />} /> */}
                </Routes>
                
            </BrowserRouter>
        </>
    )
}
