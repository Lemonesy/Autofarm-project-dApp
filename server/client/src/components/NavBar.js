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
      <ul className="content-header__list">
      <li className="content-header__item"> <Nav.Link to ={BASKET_ROUTE} className='content-header__link' href="/">Home</Nav.Link> </li>
      <li className="content-header__item">  <Nav.Link className='content-header__link'  href="/">Roadmap</Nav.Link></li>
      <li className="content-header__item">  <Nav.Link className='content-header__link' href="/">About us</Nav.Link></li>
      <li className="content-header__item"> <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button></li>
                       <li className="content-header__item"> <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button></li>
  </ul>
      </Nav>
      :
      <Nav className="ml-auto">
      <ul className="content-header__list">
      <li className="content-header__item"> <Nav.Link className='content-header__link' href="/">Home</Nav.Link> </li>
      <li className="content-header__item">  <Nav.Link className='content-header__link'  href="/">Roadmap</Nav.Link></li>
      <li className="content-header__item">  <Nav.Link className='content-header__link' href="/">About us</Nav.Link></li>
      <li className="content-header__item"><Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)} className='content-header__link '>Войти</Button></li>
  </ul>
      </Nav>
}
    </Navbar>

    );
});

export default NavBar;