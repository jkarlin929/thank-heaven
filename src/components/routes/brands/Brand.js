import React, { Component } from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
class Brand extends Component {
  render() {
    return (
      <div className="Brand">
        <div className="brand-left-column">
          <img className="brand-image" src={this.props.brand.image} alt={this.props.brand.name} />
        </div>
        <div className="brand-right-column">
          <h1 className="brand-name">{this.props.brand.name}</h1>
          <h2 className="brand-location">{this.props.brand.location}</h2>
          <h2 className="brand-story">{this.props.brand.story}</h2>
          <Link className="brand-by-brand" to={
            {
              pathname: `/brands?${this.props.brand.id}`,
              state: {
                brand: this.props.brand,
                products: this.props.products
              }
            }}>
            What {this.props.brand.name} offers
          </Link>
          <h2 className="brand-quote">"{this.props.brand.quote}"</h2>
        </div>
      </div>
    );
  }
}
export default Brand;
