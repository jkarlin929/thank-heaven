import React, { Component } from 'react';

class FeaturedBrand extends Component {

  render() {
    return (
      <div className='FeaturedProduct'>
        <img src={this.props.image} alt='brand'/>
      </div>
    );
  }

}

export default FeaturedBrand;
