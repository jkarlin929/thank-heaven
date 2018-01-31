import React, { Component } from 'react';
import Hours from './Hours';

class Contact extends Component {

  render() {
    return (
      <div>

        <h1>Contact Information</h1>
          <p>(718) 575-2229</p>
          <a href="mailto:thankheaven4baby@yahoo.com">thankheaven4baby@yahoo.com</a>
            <Hours />

      </div>
    );
  }

}

export default Contact;
