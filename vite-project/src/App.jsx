import { ToastContainer } from "react-toastify";
import { useState } from 'react'
import './App.css'
import SingleInput from "./8_input/SingleInput";
import MultipleInput from "./8_input/multiple_input/multipleinput";



function App() {
  return (
    <>
      <div className="appContainer">
        {/*-----------------------COMPONENT--------------------------  */}
        {/* <FunCom /> */}
        {/* <ClassCom /> */}

        {/*-----------------------STYLE--------------------------  */}
        {/* <Style /> */}
        {/* <Slider /> */}
        {/* <ReactStrap /> */}
        {/* <MainPage /> */}

        {/*-----------------------USE_STATE--------------------------  */}
        {/* <UseStaeCom /> */}
        {/* <UseStaePro /> */}
        {/* <UseStaePro2 /> */}
        {/* <UseStateClass /> */}

        {/*-----------------------FRAGMENT--------------------------  */}
        {/* <FragmentCom /> */}
        {/* <FragmentCom /> */}

        {/*-----------------------MAP-KEY--------------------------  */}
        {/* <MapKey /> */}

        {/*-----------------------PROPS--------------------------  */}
        {/* <FunProps name={"Urvish"} age={23} color={"red"} /> */}
        {/* <FunProps name={"Nimesh"} age={20} color={"green"} /> */}
        {/* <ClassProps data={{ name: "Urvish", greeting: "Good-Morning" }} /> */}
        {/* <ClassProps /> */}
        {/* <PropPro1 /> */}
        {/* <PropsChange name="urvish" /> */}

        {/*-----------------------LIFE_CYCLE_METHOD--------------------------  */}
        {/* <LifeCycleMethod /> */}
        {/* <LifePro /> */}
        {/* <PropsChanges1 name="shivam"/> */}

        {/*-----------------------HOOK--------------------------  */}
        {/* <UseEfectCom /> */}
        {/* <UseEfreectProject /> */}

        {/*-----------------------INPUT--------------------------  */}
         {/* <SingleInput />  */}
      
        <MultipleInput />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
