import React, { Component } from 'react';

class FeaturedProduct extends Component {
  render() {
    return (
      <div className='FeaturedProduct'>
        <a href="/products">
          <img src={this.props.image} alt='product'/>
        </a>
      </div>
    );
  }

}

export default FeaturedProduct;
