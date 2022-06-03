import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const TokenPage = () => {
const token = {id: 3, name:'BNB-BSW', price: 28.2, apy: 83}
const description = [
{id:1, title: 'Staked', description:'0.00000'},
{id:2, title: 'Staked USD', description:'0.000'},
{id:3, title: 'Earned', description:'0.17%'}

]
  return (
    <Container className='mt-3'>
      <Row>
      <Col className='mt-4' md={4}>
тут картинка
      </Col>

      <Col md={4}>
        <Row
        className='d-flex flex-column align-items-center'
        >
          <h2
          className='mt4'
          style={{color:'white'}}
          >{token.name}</h2>
          <div
          className='d-flex align-items-center justify-content-center'
          style={{fontSize:32, color:'white'}}
          >
            APY{token.apy}%
          </div>
        </Row>
        </Col>

        <Col md={4}>
        <Card
        className='d-flex flex-column align-items-center justify-content-around'
        style={{width:300, height:300, fontSize:32, border:'5px solid gray'}}
        >
          <h3 
          >TVL: {token.price}k</h3>
          <Button >Connect Wallet</Button>
        </Card>
        </Col>

      </Row>

      <Row className='d-flex flex-column m-3'
      style={{color:'white'}}
      >
        
        {description.map((info, index) =>
          <Row key={info.id}
          style={{background:index %2===0? 'lightgray': 'transparent', padding:10}}
          >
            {info.title}: {info.description}
          </Row>
          )}
      </Row>
    </Container>
  );
};

export default TokenPage;
