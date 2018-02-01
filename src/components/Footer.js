import React, { Component } from 'react';
import facebook from './001-facebook-logo.png';
import instagram from './002-instagram-logo.png';
class Footer extends Component {

  render() {
    return (
      <div className='Footer'>
        <div className='footer-left'>
          <div>72-18 Austin St Forest Hills, New York</div>
          <div>(718) 575-2229</div>
          <div>thankheaven4baby@yahoo.com</div>
          <div>Open daily 11am - 6pm</div>
        </div>
        <div className='footer-right'>
          <div className="social-media">
            <div className="facebook">
              <img src={facebook} alt="facebook logo"/>
            </div>
            <div className="instagram">
              <img src={instagram} alt="instagram logo"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Footer;
