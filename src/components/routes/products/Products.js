import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {

  constructor(){
    super();
    this.state = {
      dataLoaded: false,
      products: null,
    }
  }

  componentDidMount() {
    this.setState({
      dataLoaded: true,
      products: data.data,
    })
  }

  renderProducts() {
    if (this.state.dataLoaded) {
      return this.state.products.map(product => {
        return (
          <Product key={product.id} products={product} />
        );
      });
    } else return <p>Loading...</p>
  }

  render() {
    return (
      <div>
        <Header />
        <Logo />
        <h1>Products</h1>
        <div className="productList">
          {this.renderProducts()}
        </div>
        <Instagram />
        <Footer />
      </div>
    );
  }

}

export default Products;
