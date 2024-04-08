import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../redux/app/store'
import Header from '../ui/Components/Header/Header'



export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                {/* <Routes>
                </Routes> */}
            </BrowserRouter>
        </>
    )
}