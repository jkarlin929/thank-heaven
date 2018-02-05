import React, { Component } from 'react';
import logoimg from './logo.png';
import { PageHeader } from 'react-bootstrap';
class Logo extends Component {

  render() {
    return (
        <div className='logo'>
          <img src={logoimg} alt='' />
        </div>
    );
  }

}

export default Logo;
