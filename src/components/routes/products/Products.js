import React, { Component } from 'react';
import Pagination from '../../Pagination';
import Logo from '../../Logo';
import Product from './Product';
import Instagram from '../../Instagram';
class Products extends Component {
  constructor(){
    super();

    this.state = {
      pageOfItems: [],
      productItems: []
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
    this.pushProduct = this.pushProduct.bind(this);
  }
  componentDidMount() {
    this.setState({products: this.props.products, brands: this.props.brands})
    this.pushProduct(this.props.products, this.props.brands)
  }

  //function to create a variable to push into the empty array
  //the array will be the list of items to paginate
  pushProduct(products, brands) {
    const productItems = products.map(product => {
      console.log(product.brand_id, 'brand_id inside pushproduct');
      return {id: product.id, name: product.name, description: product.description, image: product.image, brand_id: product.brand_id, brands: brands}

    })
    this.setState({productItems: productItems})
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({pageOfItems: pageOfItems});

  }

  render() {
    return (
      <div>
      <Logo />
      <div className="container">
        <div className="text-center">
          <h1>Products</h1>
          {
            this.state.productItems
              ? this.state.pageOfItems.map(item =>
              // <div key={item.id}>{item.name}</div>
              <Product key={item.id} name={item.name} description={item.description} image={item.image} brand_id={item.brand_id} brands={this.props.brands}/>)
              : ''
          }
          {
            this.state.productItems
              ? <Pagination items={this.state.productItems} onChangePage={this.onChangePage}/>
              : ''
          }
        </div>
      </div>
      <Instagram />
    </div>);
  }
}

export default Products;
