import React, { Component } from 'react';

class Welcome extends Component {

  render() {
    return (
      <div className='Welcome'>
        <div className='welcome-logo'>
          <img src='#welcome-logo' alt='Welcome' />
        </div>
        <div className='welcome-text'>
          Thank Heaven is a unique and friendly store located in the heart of historic Forest Hills. Our philosophy is to make our customers' experience at Thank Heaven an enjoyable one for both moms and their children. Looking for the perfect baby gift? Choose from clothing, accessories and toys.
        </div>
        <div className='quote-pink'>
          In the late spring of 2004, after the recent birth of my third child, I opened Thank Heaven Children's Boutique in the heart of Forest Hills. Standing as an emulation of the sense of community present in this neighborhood, for the last 14 years, mothers, fathers, grandparents, aunts, uncles, and anyone looking ot celebrate the children in their lives have stopped by to purchase a gift they know will be unique and thoughtful.
        </div>
      </div>
    );
  }

}

export default Welcome;
