import React, { Component } from 'react';
import FeaturedProduct from './FeaturedProduct';

class FeaturedProducts extends Component {
  constructor(){
    super();
    this.state = {
      products: this.props.products
    }
  }
  createProducts(products){
    return products.map((product) => {
      if (product.featured){
        return(
          <FeaturedProduct key={product.id} name={product.name} description={product.description} image={product.image} />
        )
      }
    })
  }
  render() {
    return (
      <div className='FeaturedProducts'>
        <div className='featured-tagline'>
          Lookbook
        </div>
        <div className='featured-products-text'>
          Featured Products
        </div>
        <button className='content-button'>
          See All
        </button>
        <div className='FeaturedProductsList'>
          {this.createProducts(this.state.products)}
        </div>
      </div>
    );
  }
}

export default FeaturedProducts;
