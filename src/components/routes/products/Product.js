import React, { Component } from 'react';
class Product extends Component {
  componentWillMount(){
    console.log('inside product',this.props);
  }
  addCurrentBrand(){

    if (this.props.brand_id == this.props.brands.id){
      return <h2>{this.props.brands.name}</h2>
    }
  }

  render() {

    return (
      <div className="Product">
        <div className="product-left-column">
          <img src={this.props.image} alt={`image for ${this.props.name} goes here`} />
        </div>
        <div className="product-right-column">
          <h1>{this.props.name}</h1>
          {this.addCurrentBrand()}
          <p>{this.props.description}</p>
        </div>


      </div>
    );
  }
}
export default Product;
