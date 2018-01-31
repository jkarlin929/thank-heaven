import React, { Component } from 'react';

class Brand extends Component {

  render() {
    return (
      <div className="Brand">
        <img src={props.brands.image} alt={props.brands.name} />
        <h1>{props.brands.name}</h1>
        <h2>{props.brands.location}</h2>
        <h2>{props.brands.story}</h2>
        <p>{props.brands.quote}</p>
      </div>
    );
  }

}

export default Brand;
