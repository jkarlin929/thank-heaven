import React, { Component } from 'react';
import Logo from '../../Logo';
import Carousel from './Carousel';
import FeaturedBrands from './FeaturedBrands';
import FeaturedProducts from './FeaturedProducts';
import Welcome from './Welcome';
import Instagram from '../../Instagram';
import phone from '../../../../public/images/005-mitten.png';



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
  componentDidUpdate(){
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Logo />
        <Carousel />
        <Welcome />
        {this.state.dataLoaded ? <FeaturedProducts products={this.state.products}/> : ''}
        <div className='call'>
          <span className='glyphicon glyphicon-earphone' id='cell'></span>
          <div className='call-text'>
            Call to place an order
          </div>
          <div className='phone-number'>
            <a href='tel:1 (718) 575-22229'>(718) 575-2229</a>
          </div>
        </div>
        {/* phone call me */}
        {this.state.dataLoaded ? <FeaturedBrands brands={this.state.brands}/> : ''}
        <Instagram />
      </div>
    );
  }

}

export default Homepage;
