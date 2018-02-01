import React, { Component } from 'react';
import Logo from '../../Logo';
import Brand from './Brand';
class Brands extends Component {
  constructor(props){
    super(props);
    this.state = {
      brands: this.props.brands,
      products: this.props.products,
      dataLoaded: false
    }
    this.renderBrands = this.renderBrands.bind(this);
  }
  componentDidMount(){
    if(this.state.brands){
      console.log('DATA WILL BE LOADED BE TRUE');
      this.setState({
        dataLoaded: true
      })
    }
  }
  renderBrands(brands, products) {
    return brands.map((brand) => {
      return(
        <Brand key={brand.id} brand={brand} products={this.state.products}/>
      )
    })
  }

  render() {
    return (
      <div>
        <Logo />
        <h1>Brands</h1>
        <div>
          <hr className="line" />
          <img src="http://res.cloudinary.com/camcash17/image/upload/v1517430458/001-toy-train_gapuot.png" />
        </div>
        <div className="brandList">
          {this.state.dataLoaded ? <div>{this.renderBrands(this.state.brands,this.state.products)}</div> : ''}
        </div>
      </div>
    );
  }
}
export default Brands;
