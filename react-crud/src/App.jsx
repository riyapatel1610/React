import { ToastContainer } from "react-toastify";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleInput from './singleinput'
import SinputPratices from './SinputPratices'
import MultipleInput from "./MultipleInput";
import MulIn from "./MulIn";
import CrudPratices from "./CrudPratices";

function App() {
 
  return (
    <>
    <div className="appContainer">
      {/* <SingleInput /> */}
      {/* <SinputPratices /> */}
      {/* <MultipleInput /> */}
      {/* <MulIn /> */}
      {/* <MultipleInput/> */}
      < CrudPratices />
      </div>
      <ToastContainer />
    </>
    
  )
}

export default App
