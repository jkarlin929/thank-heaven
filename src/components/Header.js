import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import facebook from './001-facebook-logo.png';
import instagram from './002-instagram-logo.png';
class Header extends Component {

  render() {
    return (
    <div className="header">
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={facebook} alt="facebook logo" id="social" />
          </Navbar.Brand>
          <Navbar.Brand>
            <img src={instagram} alt="instagram logo" id="social" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link to="/" > HOMEPAGE </Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/products" > PRODUCTS </Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Link to="/brands" > BRANDS </Link>
            </NavItem>
            <NavItem eventKey={4} href="#">
              <Link to="/reviews" > REVIEWS </Link>
            </NavItem>
            <NavItem eventKey={5} href="#">
              <Link to="/contact" > CONTACT </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Header;
