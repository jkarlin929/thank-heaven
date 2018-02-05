import React, { Component } from 'react';

class Review extends Component {
  render() {
    const props = this.props.review;
    console.log('this is props', props);
    return (
    <div>
      <div className="reviewImageDiv">
      <img className="review-image" src="http://res.cloudinary.com/jkarlin929/image/upload/v1517688704/icon_quote_ftikar.png" />
      </div>
        <div className="propsReview">
          <p>{props.quote}</p>
          <br /> <br />
          <p className="propsName">{props.name}</p>
          <p className="propsLocation">{props.location}</p>
        </div>
      </div>
    );
  }
}
export default Review;
