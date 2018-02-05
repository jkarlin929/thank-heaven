import React, { Component } from 'react';
import FeaturedBrand from './FeaturedBrand';
import { Link } from 'react-router-dom';

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
          <Link to="/brands">
            <button className='content-button'>
              See All
            </button>
          </Link>
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
