import React from 'react'
import './Nitems.css'

export default function Item(props) {
  return (
    <div className="Nitem">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="Nitem-price">
        <div className="Nitem-price-new">
          {props.sale}
        </div>
      </div>
    </div>
  )
}
