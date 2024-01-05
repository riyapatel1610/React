import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from '../Login';

function LoginModal({modal,toggle,valueee}) {


  return (
    <div>
      
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Login chek={valueee}/>
        </ModalBody>
      
      </Modal>
    </div>
  );
}

export default LoginModal;