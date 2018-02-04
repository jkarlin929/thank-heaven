import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import facebook from './001-facebook-logo.png';
import instagram from './002-instagram-logo.png';
class Header extends Component {

  render() {
    return (
      <div className="header">
        <Navbar collapseOnSelect fixedTop fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="https://www.facebook.com/thankheavenboutique/">
                <i className="fab fa-facebook-f" id="social"></i>
              </a>
            </Navbar.Brand>
            <Navbar.Brand>
              <a href="https://www.instagram.com/thankheavenboutique/?hl=en">
                <i className="fab fa-instagram" id="social"></i>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav id="navItems">
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
      </div>

    );
  }
}

export default Header;
