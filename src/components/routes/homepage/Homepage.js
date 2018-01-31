import React, { Component } from 'react';
import Carousel from './Carousel';
import FeaturedBrands from './FeaturedBrands';
import FeaturedProducts from './FeaturedProducts';
import Welcome from './Welcome';



class Homepage extends Component {
  constructor(){
    super();
    this.state = {
      products: this.props.products,
      brands: this.props.brands
    }
  }
  render() {
    return (
      <div>
        <Carousel />
        <Welcome />
        <FeaturedProducts products={this.state.products}/>
        {/* phone call me */}
        <FeaturedBrands />
      </div>
    );
  }

}

export default Homepage;
