import React, { Component } from 'react';
import FeaturedBrand from './FeaturedBrand';

class FeaturedBrands extends Component {
  constructor(props){
    super(props);
    this.state = {
      brands: this.props.brands,
      dataLoaded: false
    }
    this.createBrands = this.createBrands.bind(this)
  }

  componentDidMount(){
    if(this.state.brands){
      this.setState({
        dataLoaded: true
      })
    }
  }
  createBrands(brands){
    return brands.map((brand) => {
      if (brand.featured){
        return(
          <FeaturedBrand key={brand.id} name={brand.name} description={brand.description} image={brand.image} />
        )
      }
    })
  }
  render() {
    return (
      <div className='Featured'>
        <div className='featured-tagline'>
          ~ Oh, baby ~
        </div>
        <div className='featured-text'>
          Featured Brands
        </div>
        <div>
          <a href="/brands">
            <button className='content-button'>
              See All
            </button>
          </a>
        </div>
        { this.state.dataLoaded ?
          <div className='FeaturedList'>
             {this.createBrands(this.state.brands)}
          </div>
          :
          ''
        }
      </div>
    );
  }

}

export default FeaturedBrands;
