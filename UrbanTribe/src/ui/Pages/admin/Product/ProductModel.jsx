// import React, { useState } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import InputProduct from "./inputProduct";
// import { Check, IndianRupee } from "lucide-react";

// function ProductModal({
//   modal,
//   toggle,
//   refresHandler,
//   produc,
//   setProduc,
//   updatemod,
//   intialProduc,
//   setUpdatemod,
//   previewdata,
//   chek
// }) {
//   console.log(previewdata);
//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggle} size="lg">
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//           {chek === false ? (
//             <InputProduct
//               togle={toggle}
//               refresHandle={refresHandler}
//               product={produc}
//               setProduct={setProduc}
//               updatemode={updatemod}
//               intialProduct={intialProduc}
//               setUpdatemode={setUpdatemod}
//             />
//           ) : (
//             <>
//               {previewdata?.map((e) => {
//                 return (
//                   <div >
//                     <div className="flex justify-content-center my-3">
//                       <img src={e.thumbnail} alt=""  width={770}/>
//                     </div>
//                     <div className="flex gap-10 justify-content-center  ">
//                       <div>
//                         <h5>Title:-{e?.title}</h5>
//                         <h5>description:-{e.description}</h5>
//                         <h5>Gender:-{e?.gender}</h5>

//                         <div className="flex items-center">
//                           <div>Color:- </div>
//                           <div className="flex gap-2 ms-2">
//                             {e?.color.map((color, i) => {
//                               return (
//                                 <div
//                                   style={{
//                                     height: "15px",
//                                     width: "15px",
//                                     border: "1px solid black",
//                                     // borderRadius: "50%",
//                                     backgroundColor: color,
//                                   }}
//                                   key={i}
//                                 ></div>
//                               );
//                             })}
//                           </div>
//                         </div>
//                       </div>
//                       <div>
//                         <h5>category:- {e.category.map((e) => e).join(" / ")}</h5>
//                         <h5 className="flex gap-3">
//                           <span>Size:- </span>
//                           <div className="d-flex gap-2">
//                             {["41", "42", "43", "44", "45"].map((ee, i) => {
//                               return (
//                                 <div
//                                   key={i}
//                                   style={
//                                     e.size.includes(ee)
//                                       ? {
//                                           backgroundColor: "green",
//                                           color: "white",
//                                         }
//                                       : {
//                                           backgroundColor: "gray",
//                                           color: "white",
//                                         }
//                                   }
//                                 >
//                                   {ee}
//                                 </div>
//                               ); /* first  Task*/
//                             })}
//                           </div>
//                         </h5>
//                         <h5 className="flex items-center "><span className="px-2">Price:</span><IndianRupee size={15} /> {e.price} </h5>
//                         <h5>discountPercentage:- {e?.discountPercentage} %</h5>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}{" "}
//             </>
//           )}
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// }

// export default ProductModal;


import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import InputProduct from "./inputProduct";
import { IndianRupee } from "lucide-react";
import "./product.css"

function ProductModal({
  modal,
  toggle,
  refresHandler,
  produc,
  setProduc,
  updatemod,
  intialProduc,
  setUpdatemod,
  previewdata,
  chek,
}) {
  return (
    <Modal isOpen={modal} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Product Details</ModalHeader>
      <ModalBody>
        {chek === false ? (
          <InputProduct
            togle={toggle}
            refresHandle={refresHandler}
            product={produc}
            setProduct={setProduc}
            updatemode={updatemod}
            intialProduct={intialProduc}
            setUpdatemode={setUpdatemod}
          />
        ) : (
          <>
            {previewdata?.map((product, index) => (
              <div key={index} className="product-details">
                <div className="product-image">
                  <img src={product.thumbnail} alt="" width={770} />
                </div>
                <div className="product-info">
                  <h5>Title: {product.title}</h5>
                  <h5>Description: {product.description}</h5>
                  <h5>Gender: {product.gender}</h5>
                  <div className="color-options">
                    <span>Color:</span>
                    {product.color.map((color, i) => (
                      <div
                        key={i}
                        style={{ backgroundColor: color }}
                        className="color-option"
                      ></div>
                    ))}
                  </div>
                  <h5>Category: {product.category.join(" / ")}</h5>
                  <div className="size-options">
                    <span>Size:</span>
                    {["41", "42", "43", "44", "45"].map((size, i) => (
                      <div
                        key={i}
                        style={{
                          backgroundColor: product.size.includes(size)
                            ? "black"
                            : "gray",
                          color: "white",
                        }}
                        className="size-option"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                  <div className="price">
                    <span>Price:</span>
                    <IndianRupee size={15} />
                    {product.price}
                  </div>
                  <h5>Discount Percentage: {product.discountPercentage}%</h5>
                </div>
              </div>
            ))}
          </>
        )}
      </ModalBody>
    </Modal>
  );
}

export default ProductModal;
