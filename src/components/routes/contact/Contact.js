import React, { Component } from 'react';
import Hours from './Hours';
import MessageForm from './MessageForm';
import Map from './Map';
class Contact extends Component {
  render() {
    return (
      <div>
      <img src="images/a92ff0d0f20fe760545181aceb43b0d3-logo.png" alt="logo" />
        <h1>Contact Us</h1>
        <img src="http://res.cloudinary.com/camcash17/image/upload/v1517430458/001-toy-train_gapuot.png" />
        <Map />
        <h1>Contact Information</h1>
          <p>(718) 575-2229</p>
          <a href="mailto:thankheaven4baby@yahoo.com">thankheaven4baby@yahoo.com</a>
            <Hours />
            <MessageForm />
      </div>
    );
  }
}
export default Contact;
