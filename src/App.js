import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
//import components
import Homepage from './components/routes/homepage/Homepage';
import Products from './components/routes/products/Products';
import Brands from './components/routes/brands/Brands';
import Reviews from './components/routes/reviews/Reviews';
import Contact from './components/routes/contact/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Admin from './components/admin/Admin';

//stop touching the dev and master branch directly guys

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: '',
      brands: '',
      reviews: '',
      dataLoaded: false
    }
  }

  componentDidMount(){
    axios.get('/data/products')
    .then(products => {
      this.setState({
        products: products.data.data
      })
    })
    .catch( err => {
      console.log(err);
    })
    axios.get('/data/brands')
    .then(brands => {
      this.setState({
        brands: brands.data.data
      })
    })
    .catch( err => {
      console.log(err);
    })
    axios.get('/data/reviews')
    .then(reviews => {
      this.setState({
        reviews: reviews.data.data
      })
    })
    .catch( err => {
      console.log(err);
    })
  }

  componentDidUpdate(){
    if(this.state.products && this.state.brands && this.state.reviews && !this.state.dataLoaded){
      this.setState({
        dataLoaded: true
      })
    }
  }

  render(){
    return (
      <div className='App'>
        <Header />

        {this.state.dataLoaded ?
          <div className='routes'>
            <Route exact path="/" component={Homepage} products={this.state.products} brands={this.state.brands} reviews={this.state.reviews} />
            <Route exact path="/products" component={Products} products={this.state.products} brands={this.state.brands} reviews={this.state.reviews} />
            <Route exact path="/brands" component={Brands} products={this.state.products} brands={this.state.brands} reviews={this.state.reviews} />
            <Route exact path="/reviews" component={Products} products={this.state.products} brands={this.state.brands} reviews={this.state.reviews} />
            <Route exact path="/contact" component={Products} products={this.state.products} brands={this.state.brands} reviews={this.state.reviews} />
          </div>
          : ''}
      </div>
      )
  }
}

export default App;
