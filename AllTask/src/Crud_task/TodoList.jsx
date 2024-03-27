import React, { useState } from 'react'
import { Button, Input, Table, Label } from 'reactstrap'
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "react-toastify";


export default function SingleInput() {
    let [todo, setTodo] = useState("");
    let [allTodo, setAllTodo] = useState([]);
    let [index, setIndex] = useState(null);
    let [dataTransfer, setDataTransfer] = useState([]);
    let [selectIndex, setSelectIndex] = useState([]);
    let [checkSelect, setCheckSelect] = useState(false);

    const getData = (ele) => {
        setTodo(ele.target.value);
    };


    const addTask = () => {
        if (todo?.length > 0) {
            //  e.preventDefault(); 
            setAllTodo([...allTodo, todo]);
            toast.success("User Added succesfully");
            setTodo("");
        }
        else {
            toast.error("Please fill data");
        }
    };


    const updateData = () => {

        if (index || index === 0) {
            allTodo.splice(index, 1, todo);
            setTodo([...allTodo]);
            setTodo("");
            setIndex(null);
        } else {
            toast("Please select data");
        }
    };

    const updateHandler = (data, index) => {
        setTodo(data);
        setIndex(index);
        // toast("Data Updated Sucessfully"); 
    };

    const deleteHandler = (index) => {
        // console.log("------>", index);

        allTodo.splice(index, 1);
        setTodo([...allTodo]);
        toast("Data deleted");
    };

    const addToList = (i) => {
        let x = window.confirm("Are you sure to Trasfer a task..?");
        if (x === true) {
            setDataTransfer([...dataTransfer, allTodo[i]]);
            let filter = allTodo.filter((e, i) => {
                return index !== i;
            });
            setAllTodo(filter);
        }
    };

    const selectHandler = (index) => {
        let available = selectIndex.includes(index);
        // console.log("-----------  available----------->", available);
        if (available) {
            let filter = selectIndex?.filter((e) => e !== index);
            setSelectIndex(filter);
        } else {
            setSelectIndex([...selectIndex, index]);
        }
    };

    const selectALlHandler = (e) => {
        let y = e.target.checked;
        setCheckSelect(y);
        if (y) {
            setSelectIndex(allTodo);
        } else {
            setSelectIndex([]);
        }
      };
    




    return (<>
        <div>
            <div >
                <h3> Lets 's Things Done !! </h3>
            </div>
            <div className='d-flex text-white border-drak' >
                {/* <input type="text"/> */}
                <Input className="border border-dark   border-1" placeholder='What is your task today.?'
                    value={todo}

                    onChange={(e) => getData(e)} />

                {index || index === 0 ? (
                    <Button className='bg-dark text-white  border border-dark border-1' style={{ width: "50%" }}
                        color="white" onClick={updateData}>
                        Update
                    </Button>
                ) : (
                    <Button className='bg-dark  text-white  border border-dark border-1' style={{ width: "50%" }}
                        color="#000000" onClick={() => addTask()}
                    >
                        Add task
                    </Button>)}
            </div>

        </div>
        <div className='d-flex w-75'>
            <div className='w-50 mt-5 p-3'>
                <ul className='list-group' >
                    <div className=" gap-2 d-flex justify-content-end">
                        <Label>select All </Label>
                        <input type="checkbox"  onChange={()=>selectALlHandler(e)} checked={checkSelect}/>
                    </div>
                    {allTodo.map((e, i) => (
                        <li key={i} className=' bg-dark text-white list-group-item d-flex justify-content-between align-items-center bg-primary'>
                            <span>
                                <strong>{i + 1}</strong>: {e}
                            </span>
                            <span>
                                <Button className=' text-white' onClick={() => updateHandler(e, i)} color='white'>
                                    <FaEdit />
                                </Button>
                                <Button className='text-white' onClick={() => deleteHandler(i)} color='black'>
                                    <MdDeleteSweep />
                                </Button>
                                <Button className='text-white' onClick={() => {
                                    addToList(i)
                                }} color='black'>
                                    <FaPlusCircle />

                                </Button>

                                <input
                                    onChange={() => selectHandler(i)}
                                    type="checkbox"
                                    checked={selectIndex.includes(i)}
                                />



                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-50 mt-5 p-3'>
                <ul className='list-group'>
                    {dataTransfer.map((e, i) => (
                        <li key={i} className=' bg-dark text-white list-group-item d-flex justify-content-between align-items-center bg-primary'>
                            <span>
                                <strong>{i + 1}</strong>: {e}
                            </span>
                            <span>

                                <Button className='text-white' onClick={() => deleteHandler(i)} color='white'>
                                    <MdDeleteSweep />
                                </Button>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </>

    )
}