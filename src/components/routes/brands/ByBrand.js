// import React, { Component } from 'react';
// class ByBrand extends Component{
//   constructor(){
//     super();
//     this.state = {
//       dataLoaded: false
//     }
//     this.renderByBrand = this.renderByBrands.bind(this);
//   }
//
//   componentDidMount(){
//     const props = this.props.location.state;
//     if (props){
//       this.setState({
//         dataLoaded: true
//       })
//     }
//   }
//   renderByBrand(products){
//     return products.map(product) => {
//       if (product.brand_id == props.brand.id){
//         return(
//           <div> {product.name} </div>
//         )
//       }
//     }
//
//   }
//   render(){
//
//     return(
//       <div>
//         {this.state.dataLoaded ? <div>{this.renderByBrand(props.products)}</div> : ''}
//       </div>
//     )
//   }
// }
// export default ByBrand;
