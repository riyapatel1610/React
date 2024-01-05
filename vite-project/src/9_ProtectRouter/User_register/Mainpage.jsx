import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
//  impot RegisterModal from "./modal/Red"

import RegisterModal from "./model/RegisterModal";
import LoginModal from "./model/LoginModal";


export default function Mainpage() {
  const [reg, setReg] = useState(false);
  const [match, setMatch] = useState(null);

  const RegBtn = () => setReg(!reg);
  const [log, setLogin] = useState(false);
  const LogiBtn = () => setLogin(!log);

  useEffect(() => {
    let json = localStorage.getItem("data");
    setMatch(JSON.parse(json));
  },[]);
  return (
    <>
      <RegisterModal modal={reg} toggle={RegBtn} />
      <LoginModal modal={log} toggle={LogiBtn} valueee={match}/>
      <div className="d-flex gap-3 justify-content-end me-4">
        <Button color="danger" onClick={RegBtn}>
          Register
        </Button>
        <Button color="danger" onClick={LogiBtn}>
          Login
        </Button>
      </div>{
        
      }
    </>
  );
}
