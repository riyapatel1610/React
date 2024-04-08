import React from 'react'
import './NewCollection.css'
import  New_Collection from "../Images/new_collection"
import Nitems from "../Items/Nitems"

export default function NewCollection() {
    return (
        <div className="new-collection">
            <h1>New Collection</h1>
            <hr />
            <div className="collection">
                {New_Collection.map((item,i)=>
                {
                    return <Nitems key={i} id={item.id} name={item.title} image={item.Image} sale={item.sale} />
                })}
            </div>
        </div>
    )
}
