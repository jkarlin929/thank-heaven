import React, { Component } from 'react';

class Brand extends Component {

  render() {
    return (
      <div className="Brand">
        <img src={this.props.image} alt={this.props.name} />
        <h1>{this.props.name}</h1>
        <h2>{this.props.location}</h2>
        <h2>{this.props.story}</h2>
        <p>{this.props.quote}</p>
      </div>
    );
  }

}

export default Brand;
