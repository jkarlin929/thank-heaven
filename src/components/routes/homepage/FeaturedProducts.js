import React, { Component } from 'react';
import FeaturedProduct from './FeaturedProduct';

class FeaturedProducts extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products,
      dataLoaded: false
    }
    this.createProducts = this.createProducts.bind(this)
  }

  componentDidMount(){
    if(this.state.products){
      this.setState({
        dataLoaded: true
      })
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
          - Lookbook -
        </div>
        <div className='featured-text'>
          Featured Products
        </div>
        <button className='content-button'>
          See All
        </button>
        { this.state.dataLoaded ?
          <div className='FeaturedProductsList'>
             {this.createProducts(this.state.products)}
          </div>
          :
          ''
        }
      </div>
    );
  }
}

export default FeaturedProducts;
