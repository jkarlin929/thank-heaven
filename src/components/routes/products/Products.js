import React, { Component } from 'react';
import Logo from '../../Logo';
import Product from './Product';
import Instagram from '../../Instagram';
class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products,
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
        <Product key={product.id} name={product.name} description={product.description} image={product.image} brand_id={product.brand_id} />
      )
    })
  }
  render() {
    return (
      <div>
        <Logo />
        <h1>Products</h1>
        <div>
          <hr className="line" />
          <img src="http://res.cloudinary.com/camcash17/image/upload/v1517430458/001-toy-train_gapuot.png" />
        </div>
        <div className="productList">
          {this.state.dataLoaded ? <div>{this.renderProducts(this.state.products)}</div> : ''}
        </div>
        <Instagram />
      </div>
    );
  }
}
export default Products;
