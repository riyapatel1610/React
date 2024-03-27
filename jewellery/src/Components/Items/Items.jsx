import React from 'react'
import './Items.css'

export default function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-new">
          {props.sale}
        </div>
      </div>
    </div>
  )
}
