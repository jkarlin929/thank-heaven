import React, { Component } from 'react';
class Product extends Component {

 render() {
   return (
     <div className="Product">
       <div className="product-left-column">
         <img src={this.props.image} alt={`image for ${this.props.name} goes here`} />
       </div>
       <div className="product-right-column">

         <h1 className="product-name">{this.props.name}</h1>
         <h2 className="brands-name">{this.props.brands[this.props.brand_id-1].name}</h2>
         <h2 className="product-desc">{this.props.description}</h2>
       </div>
     </div>
   );
 }
}
export default Product;
