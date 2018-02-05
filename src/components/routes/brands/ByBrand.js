import React, { Component } from 'react';
import Logo from '../../Logo';
import Instagram from '../../Instagram';

class ByBrand extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataLoaded: false
    }
    this.renderByBrand = this.renderByBrand.bind(this);
  }

  componentDidMount(){

    if (this.props.location.state.products){
      this.setState({
        dataLoaded: true
      })
    }
  }
  renderByBrand(products,brand){
    return products.map((product) => {
      if (product.brand_id == brand.id){
        return(
          <div className="by-brand" key={product.id}>
           <div className="by-brand-left-column">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="brand-right-column">
              <h1 className="product-name">{product.name}</h1>
              <h2 className="product-desc">{product.description}</h2>
            </div>

          </div>
        )
      }
    })
  }
  render(){
    const products = this.props.location.state.products;
    const brand = this.props.location.state.brand;
    const props = this.props.location.state;

    return(
      <div className="ByBrand">
        <Logo />
        <h1 className="products-header"> Products by {brand.name} </h1>
        <div className ="train-logo">
          <hr className="line1" />
          <img className="trainImage" src="http://res.cloudinary.com/camcash17/image/upload/v1517430458/001-toy-train_gapuot.png" />
          <hr className="line2" />
        </div>
        {this.renderByBrand(products,brand)}
        {/* <Instagram /> */}
      </div>
    )
  }
}
export default ByBrand;
