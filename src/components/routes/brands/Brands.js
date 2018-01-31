import React, { Component } from 'react';
import Brand from './Brand';

class Brands extends Component {

  renderBrands() {
    if (this.state.dataLoaded) {
      return this.state.brands.map(brand => {
        return (
          <Brand key={brand.id} brands={brand} />
        );
      });
    } else return <p>Loading...</p>
  }

  render() {
    return (
      <div>
        <Header />
        <Logo />
        <h1>Brands</h1>
        <div className="brandList">
          {this.renderBrands()}
        </div>
        <Instagram />
        <Footer />
      </div>
    );
  }

}

export default Brands;
