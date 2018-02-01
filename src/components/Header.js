import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import facebook from './001-facebook-logo.png';
import instagram from './002-instagram-logo.png';
class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="social-media">
          <div className="facebook">
            <img src={facebook} alt="facebook logo"/>
          </div>
          <div className="instagram">
            <img src={instagram} alt="instagram logo"/>
          </div>
        </div>
        <div className="Links">
          <Link to="/" > Homepage </Link>
          <Link to="/products" > Products </Link>
          <Link to="/brands" > Brands </Link>
          <Link to="/reviews" > Reviews </Link>
          <Link to="/contact" > Contact </Link>
        </div>
      </div>
    );
  }
}

export default Header;
