// import React, { Component } from 'react';
// import Logo from '../../Logo';
// import Product from './Product';
// import Pagination from '../../Pagination';
// class Products extends Component {
//   constructor(props){
//     super(props);
//     // var exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });
//
//
//     this.state = {
//       products: this.props.products,
//       brands: this.state.brands,
//       exampleItems: exampleItems,
//       productItems: productItems,
//       pageOfItems: [],
//       dataLoaded: false
//     }
//     // this.renderProducts = this.renderProducts.bind(this);
//     this.onChangePage = this.oneChangePage.bind(this);
//   }
//   componentDidMount(){
//     if(this.state.products && this.state.brands){
//       this.setState({
//         dataLoaded: true
//       })
//     // renderProducts(products,brands)
//     }
//   }
//
//   onChangePage(pageOfItems) {
//           // update state with new page of items
//           this.setState({ pageOfItems: pageOfItems });
//       }
//
//   // renderProducts(products, brands) {
//   //   var productItems = products.map((product) => {
//   //       return <Product key={product.id} name={product.name} description={product.description} image={product.image} brand_id={product.brand_id} />
//   //   })
//   // }
//   // renderProducts(products, brands) {
//   //   return products.map((product) => {
//   //     return(
//   //       <Product key={product.id} name={product.name} description={product.description} image={product.image} brand_id={product.brand_id} />
//   //     )
//   //   })
//   // }
//   render() {
//     return (
//       <div>
//       <Logo />
//         <h1>Products</h1>
//         <div>
//           <hr className="line" />
//           <img src="http://res.cloudinary.com/camcash17/image/upload/v1517430458/001-toy-train_gapuot.png" />
//         </div>
//         <div className="productList">
//           {this.state.pageOfItems.map(item =>
//               <div key={item.id}>{item.name}</div>
//           )}
//           <Pagination items={this.state.productItems} onChangePage={this.onChangePage} />
//           {/* {this.state.dataLoaded ? <div>{this.renderProducts(this.state.products)}</div> : ''} */}
//         </div>
//       </div>
//     );
//   }
// }
// export default Products;
import React from 'react';
import Pagination from '../../Pagination';
import Product from './Product';

class Products extends React.Component {
    constructor() {
        super();

        // an example array of items to be paged
        var exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: [],
            productItems: [],
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
        this.pushProduct = this.pushProduct.bind(this);
    }
    componentDidMount(){
      this.setState({
        products: this.props.products,
        brands: this.props.brands,
      })
      console.log('inside products,',this.props);
      this.pushProduct(this.props.products,this.props.brands)

    }
    componentDidUpdate(){
      console.log('state prod items', this.state.productItems);
      console.log('page of items',this.state.pageOfItems);
    }

    pushProduct(products,brands){
      const productItems = products.map(product =>{
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          image: product.image,
          brand_id: product.brand_id,
        }
      })
      this.setState({
        productItems: productItems
      })
    }
//this.setState({ myArray: [...this.state.myArray, 'new value'] })
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        <h1>Products</h1>
                        {this.state.productItems ? this.state.pageOfItems.map(item =>
                            // <div key={item.id}>{item.name}</div>
                            <Product key={item.id} name={item.name} description={item.description} image={item.image} brand_id={item.brand_id} brands={this.props.brands} />
                        ) : ''}
                        {this.state.productItems ? <Pagination items={this.state.productItems} onChangePage={this.onChangePage} /> : <div>oonga</div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
