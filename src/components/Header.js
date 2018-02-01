import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import facebook from './001-facebook-logo.png';
import instagram from './002-instagram-logo.png';
class Header extends Component {

  render() {
    return (

      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={facebook} alt="facebook logo"/>
          </Navbar.Brand>
          <Navbar.Brand>
            <img src={instagram} alt="instagram logo"/>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link to="/" > Homepage </Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/products" > Products </Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Link to="/brands" > Brands </Link>
            </NavItem>
            <NavItem eventKey={4} href="#">
              <Link to="/reviews" > Reviews </Link>
            </NavItem>
            <NavItem eventKey={5} href="#">
              <Link to="/contact" > Contact </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Header;
