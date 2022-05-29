import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';



const CreateBrand = ({show, onHide}) => {
  return (
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Текущие депозиты
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className='d-flex justify-content-around'> 
        <div>
<h2 className='p-2'>Номер кошелька:</h2>
<div><p>0xc0ac52c1B6514FEa2a0118d813D36fD71A2C7948</p><p>0xc3Egj7R67lEbt52j424qrk8R3BEdeb182RK4916</p><p>underfiend</p><p>underfiend</p><p>underfiend</p></div>
  </div>
  <div>
<h2 className='p-2'>Сумма:</h2>
<div><p>23.6K$</p><p>4.7K$</p><p>underfiend</p><p>underfiend</p><p>underfiend</p></div>
  </div>
  
  </div>
 
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-danger" onClick={onHide}>Close</Button>
      <Button variant="outline-danger" onClick={onHide}>test</Button>

    </Modal.Footer>
  </Modal>


  );
};

export default CreateBrand;