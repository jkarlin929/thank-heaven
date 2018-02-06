import React, { Component } from 'react';
import facebook from './001-facebook-logo.png';
import instagram from './002-instagram-logo.png';
class Footer extends Component {

  render() {
    return (
      <div className='background-footer'>
        <div className='Footer'>
          <div className='footer-left'>
            <div>72-18 Austin St Forest Hills, New York</div>
            <div>(718) 575-2229</div>
            <div>thankheaven4baby@yahoo.com</div>
            <div>Open daily 11am - 6pm</div>
          </div>
          <div className='footer-right'>
            <div className='fb'>
              <a href="https://www.facebook.com/thankheavennyc/">
                <i className="fab fa-facebook-f" id="footer-social"></i>
              </a>
            </div>
            <div className='insta'>
              <a href="https://www.instagram.com/thankheaven/?hl=en">
                <i className="fab fa-instagram" id="footer-social"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Footer;
