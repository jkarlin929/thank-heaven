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
          <div className="Product" key={product.id}>
            <div className="product-left-column">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-right-column">
              <h1>{product.name}</h1>
              <h2>{product.brand_id}</h2>
              <p>{product.description}</p>
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
        <h1> Products by {brand.name} </h1>
        {/* {this.state.dataLoaded ? <div>{this.renderByBrand(products)}</div> : ''} */}
        {this.renderByBrand(products,brand)}
      </div>
    )
  }
}
export default ByBrand;
