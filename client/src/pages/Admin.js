import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from '../components/modals/CreateBrand';

const Admin = () => {
 const [brandVisible, setBrandVisible] = useState(false)
  return (
    <Container className='d-flex flex-column admin'>
      <Button
       variant={'outline-dark'}
        className="mt-4 pt-2"
        onClick={() => setBrandVisible(true)}
                      >
        Посмотреть депозиты
      </Button>
      {/* <Button variant={'outline-dark'} className="mt-4 pt-2"
                      >
        Зарегистрировать аккаунт
      </Button> */}
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
    </Container>
  );
};

export default Admin;
