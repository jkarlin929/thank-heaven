import React, { Component } from 'react';
import Carousel from './Carousel';
import FeaturedBrands from './FeaturedBrands';
import FeaturedProducts from './FeaturedProducts';
import Welcome from './Welcome';



class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: '',
      brands: '',
      dataLoaded: false
    }
  }

  componentDidMount(){
    this.setState({
      products: this.props.products,
      brands: this.props.brands,
      dataLoaded: true
    })
  }

  render() {
    return (
      <div>
        <Carousel />
        <Welcome />
        {this.state.dataLoaded ? <FeaturedProducts products={this.state.products}/> : ''}
        {/* phone call me */}
        <FeaturedBrands />
      </div>
    );
  }

}

export default Homepage;
