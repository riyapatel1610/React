import React from 'react'

import { ToastContainer } from "react-toastify";

import SingleInput from './Crud_task/TodoList';
// import ChartGpt from './Crud_task/chartGpt';

import "./App.css";
// import Todo from './Crud_task/Todo';
// import UvTodo from './Crud_task/UvTodo';
import Todo from './Crud_task/Todo';

// import TodoRoutes from './RouteTask/MainRoute';
import Login from './login';
// import LoginModal from './login';
import RegisterModal from './Register';
import SameText from './Crud_task/SameText';
import RegisterTask from './Crud_task/RegisterTask';
import ChartGpt from './Crud_task/ChartGpt';





export default function App() {
    return (<>
        <div className="appcontainer">
        {/* < SingleInput /> */}
     
        {/* <Todo /> */}
        {/* <TodoRoutes /> */}
        {/* <Login/> */}
        {/* < RegisterModal/> */}
        {/* <LoginModal /> */}
        {/* <SameText/> */}
        {/* < RegisterTask/> */}
        <ChartGpt />
        
        </div>
        <ToastContainer />
    </>

    )
}
