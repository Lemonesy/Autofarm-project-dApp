import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, AUTOFARM_ROUTE, BASKET_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (

      <Navbar className='content-header' variant="dark">
        
    <NavLink className={'content-header__logo'} to={AUTOFARM_ROUTE}></NavLink>
    {user.isAuth ?
      <Nav className="ml-auto">
      <ul class="content-header__list">
      <li class="content-header__item"> <Nav.Link to ={BASKET_ROUTE} className='content-header__link' href="/">Home</Nav.Link> </li>
      <li class="content-header__item">  <Nav.Link className='content-header__link'  href="/">Roadmap</Nav.Link></li>
      <li class="content-header__item">  <Nav.Link className='content-header__link' href="/">About us</Nav.Link></li>
      <li class="content-header__item"><Button
       variant={"outline-light"}
        onClick={() =>history.push(ADMIN_ROUTE)}
         className='content-header__link'>
              Admin</Button></li>

      <li class="content-header__item"><Button
       variant={"outline-light"}
        onClick={() =>history.push(LOGIN_ROUTE)}
          className='content-header__link wallet'></Button></li>
  </ul>
      </Nav>
      :
      <Nav className="ml-auto">
      <ul class="content-header__list">
      <li class="content-header__item"> <Nav.Link className='content-header__link' href="/">Home</Nav.Link> </li>
      <li class="content-header__item">  <Nav.Link className='content-header__link'  href="/">Roadmap</Nav.Link></li>
      <li class="content-header__item">  <Nav.Link className='content-header__link' href="/">About us</Nav.Link></li>
      <li class="content-header__item"><Button variant={"outline-light"} onClick={() => user.setIsAuth(true)} className='content-header__link '><NavLink className="wallet" to={LOGIN_ROUTE}>Войти</NavLink></Button></li>
  </ul>
      </Nav>
}
    </Navbar>

    );
});

export default NavBar;