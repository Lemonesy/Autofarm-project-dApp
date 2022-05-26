import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";


const NavBar = () => {

  const {user} = useContext(Context)
    return (
    <Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Roadmap</Nav.Link>
      <Nav.Link href="#pricing">About us</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>

    </Nav>
  </Navbar>
  );
};

export default Navbar;
