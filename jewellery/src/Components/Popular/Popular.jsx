import React from 'react'
import './Popular.css'
import Item from '../Items/Items'
import data_product from '../Images/Data'

export default function Popular() {
  return (
    <>
      <div className="popular" >
        {/* <h1>Popular jellewery in Rings</h1> */}
      
        <div className="popoular-item">
          {
            data_product.map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.Image} sale={item.sale} />
            })
          }
        </div>
      </div>
    </>
  )
}
