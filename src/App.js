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
  // constructor(){
  //   super();
  //   this.state = {
  //     products: null,
  //     brands: null,
  //     reviews: null
  //   }
  // }

  // componentDidMount() {
  //   axios({
  //     method: GET,
  //     url: '/data/products',
  //     data: {
  //       products: products
  //     }
  //   }).then(products => {
  //     this.setState({
  //       products: products
  //     })
  //   })
  //   .catch( err => {
  //     console.log(err);
  //   })
  // }

  render(){
    return (
      <div className='App'>
        {/* dont forget to undo changes after checking your component */}
      </div>
      )
  }
}

export default App;
