import React, { Component } from 'react';
class Review extends Component {
  render() {
    const props = this.props.review
    return (
      <div className="wrapper">
        <div className="main">
          <img className="review-image"src="http://res.cloudinary.com/jkarlin929/image/upload/v1517688704/icon_quote_ftikar.png" />
          {props.quote} <br /> <br />{props.name} <br /> {props.location}
        </div>
      </div>
    );
  }
}
export default Review;
