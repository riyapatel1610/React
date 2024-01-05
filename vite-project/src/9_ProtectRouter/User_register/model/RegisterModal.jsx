import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Register from '../Register';

function RegisterModal({modal,toggle}) {


  return (
    <div>
      
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Register </ModalHeader>
        <ModalBody>
        <Register/>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default RegisterModal;