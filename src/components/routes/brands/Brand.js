import React, { Component } from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
class Brand extends Component {
  render() {
    return (
      <div className="Brand">
        <img src={this.props.brand.image} alt={this.props.brand.name} />
        <h1>{this.props.brand.name}</h1>
        <h2>{this.props.brand.location}</h2>
        <h2>{this.props.brand.story}</h2>
        {/* <h2 key={this.props.id} onClick={() => this.renderByBrand(wine.name, wine.year)}>What {this.props.name} offers</h2> */}
        <Link to={
          {
            pathname: `/brands/:${this.props.brand.brand_id}`,
            state: {
              name: this.props.brand.name,
              image: this.props.brand.image,
              description: this.props.brand.description,
              products: this.props.products
            }
          }}>
          What {this.props.brand.name} offers
        </Link>
        <p>{this.props.brand.quote}</p>
      </div>
    );
  }
}
export default Brand;
