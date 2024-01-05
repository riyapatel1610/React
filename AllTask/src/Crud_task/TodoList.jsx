import React, { useState } from 'react'
import { Button, Input, Table } from 'reactstrap'
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { toast } from "react-toastify";


export default function SingleInput() {
    let [todo, setTodo] = useState("");
    let [allTodo, setAllTodo] = useState([]);
    let [index, setIndex] = useState(null);

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



    return (<>
        <div className="bg-primary border-3 border border-primary rounded-4  text-white  p-5">
            <div >
                <h1> Lets 's Things Done !! </h1>
            </div>
            <div className='d-flex text-white bg-primary border-drak' >
                {/* <input type="text"/> */}
                <Input className=" bg-primary border border-dark   border-1" placeholder='What is your task today.?'
                    value={todo}

                    onChange={(e) => getData(e)} />

                {index || index === 0 ? (
                    <Button className='bg-primary  border border-dark border-1' style={{ width: "50%" }}
                        color="black" onClick={updateData}>
                        Update
                    </Button>
                ) : (
                    <Button className='bg-primary  border border-dark border-1' style={{ width: "50%" }}
                        color="black" onClick={() => addTask()}
                    >
                        Add task
                    </Button>)}




            </div>


        </div>

        <div className='w-50 mt-5 p-3 border border-dark border -1'>
            <Table striped >
                <thead>
                    <tr>
                        <th>
                            Sr.no
                        </th>
                        <th>
                            Task
                        </th>
                        <th>
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {allTodo.map((e, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{e}</td>
                                <td>
                                    <Button onClick={() => updateHandler(e, i)} color='black'>
                                        <FaEdit />
                                    </Button>
                                    <Button onClick={() => deleteHandler(i)} color='black'><MdDeleteSweep /></Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    </>

    )
}
