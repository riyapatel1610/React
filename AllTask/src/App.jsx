import React from 'react'
import TodoList from './Crud_task/TodoList'
import { ToastContainer } from "react-toastify";

import "./App.css";



export default function App() {
    return (<>
        <div className="appcontainer">
        < TodoList />
        </div>
        <ToastContainer />
    </>

    )
}
