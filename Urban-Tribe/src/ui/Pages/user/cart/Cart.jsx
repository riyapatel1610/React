import React, { useState } from "react";
import img1 from "./../../../images/bag.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Bag() {
  const navigate = useNavigate();
  
  return (
    <div style={{ display: "grid", placeContent: "center", height: "700px" }}>
      <div style={{ width: "300px" }}>
        <img
          src={img1}
          alt=""
          style={{ marginLeft: "110px", marginBottom: "20px" }}
        />
      </div>
      <h3>Your Bag is Currently Empty!</h3>
      <h6 style={{ textAlign: "center" }}>Stay ahead of the curve</h6>
      <h6>Fill your bag with the latest trending styles!</h6>
      <br />
      <Button
        style={{
          color: "white",
        marginLeft:"15px",
          backgroundColor: "#ff721d ",
          height: "50px",
          width: "300px",
          borderRadius: "30px 30px",
          border: "none",
        }}
        onClick={()=>navigate("/")}
      >
        Get Trending Now
      </Button>
    </div>
  );
}