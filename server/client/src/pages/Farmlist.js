import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import TokenList from '../components/TokenList';
import TypeBar from '../components/TypeBar';

const Farmlist = () => {
  return (
    <Container>
      <Row>
      <Col md={3}>
<TypeBar/>
</Col>

<Col md={9}>
<BrandBar/>
<TokenList/>
</Col>
      </Row>
    </Container>
  )
};

export default Farmlist;
