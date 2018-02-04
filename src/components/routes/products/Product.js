import React, { Component } from 'react';
class Product extends Component {
  componentWillMount(){

  }

  render() {
    return (
      <div className="Product">
        <div className="product-left-column">
          <img src={this.props.image} alt={`image for ${this.props.name} goes here`} />
        </div>
        <div className="product-right-column">

          <h1>{this.props.name}</h1>
          <div>{this.props.brands[this.props.brand_id].name}</div>
          <div>{this.props.description}</div>
        </div>
      </div>
    );
  }
}
export default Product;
