import React, { Component } from 'react';
import Logo from '../../Logo';
import Review from './Review';

class Reviews extends Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: this.props.reviews,
      dataLoaded: false
    }
    this.renderReviews = this.renderReviews.bind(this)
  }
  componentDidMount(){
    if(this.state.reviews){
      this.setState({
        dataLoaded: true
      })
    }
  }
  renderReviews(reviews) {
    return reviews.map((review) => {
      return(
        <Review key={review.id} review={review}/>
      )
    })
  }
  render() {
    return (
    <div>
      <Logo />
      <div className="reviewsDiv">
        <div className="facebookHeader">
          <i className="fab fa-facebook-square fa-3x"></i>
            <h2>Nice Words from Facebook</h2>
        </div>
        <div className="inlineImage">
          <hr />
            <img className="trainImage" src="http://res.cloudinary.com/camcash17/image/upload/v1517430458/001-toy-train_gapuot.png" />
          <hr />
        </div>
        <div className="reviewList">
          {this.state.dataLoaded ? <div>{this.renderReviews(this.state.reviews)}</div> : ''}
          </div>
        </div>
      </div>
    );
  }
}
export default Reviews;
