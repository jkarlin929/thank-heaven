import React, { Component } from 'react';
import Hours from './Hours';
import MessageForm from './MessageForm';
import Map from './Map';
import Logo from '../../Logo';



class Contact extends Component {
  render() {
    return (
      <div className="contactDivJ">
        <Logo />
        <div className="contactDiv">
          <h1 className="headOne">Contact Us</h1>
            <div className="inlineImage">
              <hr className="lineJ"/>
                <img className="trainImageJ" src="http://res.cloudinary.com/camcash17/image/upload/v1517430458/001-toy-train_gapuot.png" />
              <hr className="lineJ"/>
            </div>
        <Map />
        <div className="headTwo">
          <h2>Contact Information</h2>
        </div>
        <div className="contactInfo">
          <p>(718) 575-2229</p>
          <p><a className="contactEmail"href="mailto:thankheaven4baby@yahoo.com">thankheaven4baby@yahoo.com</a></p>
        </div>
            <Hours />
            <MessageForm />
        </div>
      </div>
    );
  }
}
export default Contact;
