import React, { Component } from 'react';

class ByBrand extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataLoaded: false
    }
    this.renderByBrand = this.renderByBrand.bind(this);
  }

  componentDidMount(){

    // if (props){
    //   this.setState({
    //     dataLoaded: true
    //   })
    // }
    // console.log(props, 'this is PROPS');
  }
  renderByBrand(products,brand){
    return products.map((product) => {
      if (product.brand_id == brand.id){
        return(
          <div> {product.name} </div>
        )
      }
    })
  }
  render(){
    const products = this.props.location.state.products;
    const brand = this.props.location.state.brand;
    const props = this.props.location.state;
console.log('_________');
    console.log(products);
    console.log(brand);
    console.log(props);

    return(
      <div>
        {/* {this.state.dataLoaded ? <div>{this.renderByBrand(products)}</div> : ''} */}
        {this.renderByBrand(products,brand)}
      </div>
    )
  }
}
export default ByBrand;
