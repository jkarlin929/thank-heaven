import React, { Component } from 'react';
import Logo from '../../Logo';
import Product from './Product';
class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products,
      brands: this.props.brands,
      dataLoaded: false
    }
    this.renderProducts = this.renderProducts.bind(this)
  }
  componentDidMount(){
    if(this.state.products){
      this.setState({
        dataLoaded: true
      })
    }
  }
  renderProducts(products, brands) {
    return products.map((product) => {
      return(
        <Product key={product.id} name={product.name} description={product.description} image={product.image} brands={brands} />
      )
    })
  }
  render() {
    return (
      <div>
      <Logo />
        <h1 className="products-header">Products</h1>
        <div className ="train-logo">
          <hr className="line1" />
          <img className="trainImage" src="http://res.cloudinary.com/camcash17/image/upload/v1517430458/001-toy-train_gapuot.png" />
          <hr className="line2" />
        </div>
        <div>
          {this.state.dataLoaded ? <div className="productList">{this.renderProducts(this.state.products, this.state.brands)}</div> : ''}
        </div>
      </div>
    );
  }
}
export default Products;
