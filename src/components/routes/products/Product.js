import React, { Component } from 'react';
class Product extends Component {
  render() {
    return (
      <div className="Product">
        <img src={this.props.image} alt={this.props.name} />
        <h1>{this.props.name}</h1>
        <h2>{this.props.brand_id}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
export default Product;
