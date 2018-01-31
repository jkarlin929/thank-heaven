import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
//import components
import Homepage from './components/routes/homepage/Homepage';
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
        {/* dont forget to undo changes after checking your component */}
        live
        {this.state.dataLoaded ? <Homepage products={this.state.products} /> : ''}
      </div>
      )
  }
}

export default App;
