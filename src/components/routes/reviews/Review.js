import React, { Component } from 'react';
class Review extends Component {
  render() {
    const props = this.props.review
    return (
      <div className="Review">
        <img className="review-image"src="http://res.cloudinary.com/jkarlin929/image/upload/v1517688704/icon_quote_ftikar.png" />
        <div className='review-quote'>{props.quote}</div>
        <div className='review-name'>{props.name}</div>
        <div className='review-location'>{props.location}</div>
      </div>
    );
  }
}
export default Review;
