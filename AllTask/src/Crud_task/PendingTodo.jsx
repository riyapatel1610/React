import React from "react";
import { Input, Label } from "reactstrap";
export default function DoneTodo({ selectHandler, selectDone, selectAllHandler, deleteHandler }) {
    return (<div
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
    );
}