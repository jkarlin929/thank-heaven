import React, { Component } from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
class Brand extends Component {
  render() {
    return (
      <div className="Brand">
        <img src={this.props.image} alt={this.props.name} />
        <h1>{this.props.name}</h1>
        <h2>{this.props.location}</h2>
        <h2>{this.props.story}</h2>
        {/* <h2 key={this.props.id} onClick={() => this.renderByBrand(wine.name, wine.year)}>What {this.props.name} offers</h2> */}
        <Link to={{ pathname: `/:${this.props.brand_id}`,
        state: {
          name: this.props.name,
          image: this.props.image,
          description: this.props.description
        } }}>What {this.props.name} offers</Link>
        <p>{this.props.quote}</p>
      </div>
    );
  }
}
export default Brand;
