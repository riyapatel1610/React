import './App.css'
import Router from './Router/Router'

import { ToastContainer } from "react-toastify"
export default function App() {

  return (
    <>
      <div>
      {/* <h1 className="text-sm font-bold underline">
      Hello world!
    </h1> */}
        <Router />
      </div>
      <ToastContainer />
    </>
  )
}
