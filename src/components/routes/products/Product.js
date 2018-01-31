import React, { Component } from 'react';

class Product extends Component {

  render() {
    return (
      <div className="Product">
        <img src={props.products.image} alt={props.products.name} />
        <h1>{props.products.name}</h1>
        <h2>{props.products.brand_id}</h2>
        <p>{props.products.description}</p>
      </div>
    );
  }

}

export default Product;
