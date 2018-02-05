import React, { Component } from 'react';

class FeaturedProduct extends Component {
  render() {
    return (
      <div className='FeaturedProduct'>
          <img src={this.props.image} alt='product'/>
      </div>
    );
  }

}

export default FeaturedProduct;
