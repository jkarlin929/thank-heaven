import React, { Component } from 'react';
import Product from './Product';

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

  renderProducts(products) {
    return products.map((product) => {
      return(
        <Product key={product.id} name={product.name} description={product.description} image={product.image} brand_id={product.brand_id} />
      )
    })
  }

  render() {
    return (
      <div>
        {/* <Header />
        <Logo /> */}
        <h1>Products</h1>
        <div className="productList">
          {this.state.dataLoaded ? <div>{this.renderProducts(this.state.products)}</div> : ''}
        </div>
        {/* <Instagram />
        <Footer /> */}
      </div>
    );
  }

}

export default Products;
