import React, { useState } from 'react'

export default function UseStatePro() {
    let [Count, SetCount] = useState(0)
    const increment = () => {

        SetCount(Count + 1)

    }
    return (
        <>
            <h1>Count is {Count}</h1>
            <h1>
                Usestate Pro
            </h1>
            <button className='btn btn-danger' onClick={increment}>Increment Button</button>
        </>
    )
}
