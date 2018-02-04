import React, { Component } from 'react';
class Product extends Component {
  componentWillMount(){
    console.log('inside product',this.props);
  }
  addCurrentBrand(){

    if (this.props.brand_id == this.props.brands.id){
      return <h2 className="brands-name">{this.props.brands.name}</h2>
    }
  }

  render() {

    return (
      <div className="Product">
        <div className="product-left-column">
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <div className="product-right-column">
          <h1 className="product-name">{this.props.name}</h1>
          {this.addCurrentBrand()}
          <h2 className="product-desc">{this.props.description}</h2>
        </div>
      </div>
    );
  }
}
export default Product;
