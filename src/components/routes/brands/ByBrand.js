import React, { Component } from 'react';
class ByBrand extends Component{
  render(){
      const props = this.props.location.state;
    return(
      <div>
        <div className="name"> {props.name} </div>
        <div className="image"> {props.image}</div>
        <div className="description"> {props.description}</div>
      </div>
    )
  }
}
export default ByBrand;
