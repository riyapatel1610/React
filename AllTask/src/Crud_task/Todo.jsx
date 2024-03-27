import { Divide } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircleFill, Trash3 } from "react-bootstrap-icons";
import { GoMoveToEnd } from "react-icons/go";
import { Button, Input, Label } from "reactstrap";

export default function Todo() {
  let [task, setTask] = useState("");
  let [pendingTask, setPendingTask] = useState([]);
  let [doneTask, setDoneTask] = useState([]);
  let [selectDone, setSelectDone] = useState([]);
  let [selectPending, setSelectPending] = useState([]);
  let [searchPending, setSearchPending] = useState("");
  let [searchDone, setSearchDone] = useState("");


  const getData = (eleDetails) => {
    let inputValue = eleDetails?.target?.value;
    setTask(inputValue);
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("pendingTodo") || "[]");
    let filterData = data.filter((e) =>
      e.toLowerCase().includes(searchPending.toLowerCase())
    );
    setPendingTask(filterData);
    setDoneTask(JSON.parse(localStorage.getItem("doneTodo") || "[]"));
  }, [searchPending]);

  useEffect(() => { }, [searchPending]);

  //done serach


  const searchforDone = () => {

    let fillter = data.filter((e) =>
      e.toLowerCase().includes(searchDone.toLowerCase())
    );
    doneTask(fillter);
    SearchDone("")
  }






  const addTask = () => {
    let allData = [...pendingTask, task];
    localStorage.setItem("pendingTodo", JSON.stringify(allData));
    setPendingTask(allData);
    setTask("");
  };




  const deleteHandler = (index) => {
    let ans = confirm("Are you sure ?");
    if (ans) {
      let arr = doneTask.filter((e, i) => i !== index);
      setDoneTask(arr);
      localStorage.setItem("doneTodo", JSON.stringify(arr));
    }
  };


  const doneTaskHandler = (index) => {
    setDoneTask([...doneTask, pendingTask[index]]);
    let newData = pendingTask?.filter((e, i) => i !== index);
    localStorage.setItem(
      "doneTodo",
      JSON.stringify([...doneTask, pendingTask[index]])
    );
    localStorage.setItem("pendingTodo", JSON.stringify(newData));
    setPendingTask(newData);
  };


  const selectHandler = (index, type) => {
    if (type === "pending") {
      if (selectPending?.includes(index)) {
        setSelectPending(selectPending.filter((e) => e !== index));
      } else {
        setSelectPending([...selectPending, index]);
      }
    } else if (type === "done") {
      if (selectDone?.includes(index)) {
        setSelectDone(selectDone.filter((e) => e !== index));
      } else {
        setSelectDone([...selectDone, index]);
      }
    }
  };

  const selectAllHandler = (type, check) => {
    if (type === "done") {
      if (check) {
        setSelectDone(doneTask.map((e, i) => i));
      } else {
        setSelectDone([]);
      }
    } else if (type === "pending") {
      if (check) {
        setSelectPending(pendingTask.map((e, i) => i));
      } else {
        setSelectPending([]);
      }
    }
  };

  return (
    <>

      <div >
        <h3> Lets 's Things Done !! </h3>
      </div>
      <div className='d-flex text-white border-drak' >

        <Input className="border border-dark   border-1" placeholder='What is your task today.?'
          value={task}
          onChange={(e) => getData(e)} />
        <div>
          <Button onClick={addTask} style={{ width: "200%", color: "white", backgroundColor: "black" }}>
            Add Task
          </Button>
        </div>
      </div>


      <div className=" d-flex w-100 p-4 justify-content-between ">
        <div
          style={{ minWidth: "45%" }}
          className="border border-dark rounded-2 pe-2 mt-3  bg-dark text-white"
        >
          <div className="w-100 d-flex justify-content-end p-3">
            <Input
              className="w-50"
              placeholder="Search your task"
              value={searchPending}
              onChange={(e) => setSearchPending(e?.target?.value)}
            />
          </div>
          <h1 className=" text-center">Pending Task</h1>
          <div className="w-100 d-flex justify-content-end ">
            <Label className="me-2">Select All</Label>
            <Input
              type="checkbox"
              checked={pendingTask.length === selectPending.length}
              className="shadow-none"
              onChange={(e) => selectAllHandler("pending", e?.target?.checked)}
            />
          </div>

          <ul className=" bg-dark text-white">
            {pendingTask.map((element, i) => {
              return (
                <>
                  <div className="d-flex justify-content-between ">
                    <li key={i}>
                      {i + 1}. {element}
                    </li>
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <Input
                        role="button"
                        onClick={() => selectHandler(i, "pending")}
                        checked={selectPending.includes(i)}
                        type="checkbox"
                        style={{ boxShadow: "none" }}
                      />
                      <GoMoveToEnd
                        role="button"
                        color="red"
                        onClick={() => doneTaskHandler(i)}
                      />
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </ul>
        </div>
        <div
          style={{ minWidth: "50%" }}
          className="border border-dark rounded-2 pe-2 mt-3 bg-dark text-white"
        >
          <div className="w-100 d-flex justify-content-end p-3">
            <Input
              className="w-50"
              placeholder="Search your task"
              value={searchDone}
              onChange={(e) => setSearchDone(e?.target?.value)}
            />

            <Button onClick={() => {
              searchforDone()
            }}>
              Search
            </Button>
          </div>
          <h1 className="text-center">Done Task</h1>
          <div className="w-100 d-flex justify-content-end ">
            <Label className="me-2">Select All</Label>
            <Input
              type="checkbox"
              checked={doneTask.length === selectDone.length}
              className="shadow-none"
              onChange={(e) => selectAllHandler("done", e?.target?.checked)}
            />
          </div>

          {/* <ul>
            
            {doneTask.map((element, i) => {
              return (
                <>
                  <div className="d-flex justify-content-between ">
                    <li key={i}>
                      {i + 1}. {element}
                    </li>
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <Input
                        checked={selectDone?.includes(i)}
                        type="checkbox"
                        role="button"
                        onChange={() => selectHandler(i, "done")}
                        style={{ boxShadow: "none" }}
                      />
                      <Trash3
                        role="button"
                        onClick={() => deleteHandler(i)}
                        color="red"
                      />
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </ul> */}
          <ul>
            {doneTask
              .filter((element) => element.toLowerCase().includes(searchDone.toLowerCase()))
              .map((element, i) => {
                return (
                  <div className="d-flex justify-content-between" key={i}>
                    <li>
                      {i + 1}. {element}
                    </li>
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <Input
                        checked={selectDone?.includes(i)}
                        type="checkbox"
                        role="button"
                        onChange={() => selectHandler(i, "done")}
                        style={{ boxShadow: "none" }}
                      />
                      <Trash3 role="button" onClick={() => deleteHandler(i)} color="red" />
                    </div>
                  </div>
                );
              })}
          </ul>

        </div>
      </div>
    </>
  );
}

