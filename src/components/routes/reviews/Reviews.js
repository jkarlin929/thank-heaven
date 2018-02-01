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
      <div>
        Nice Words from Facebook
      </div>
        <div>
          <hr className="line" />
          <img src="http://res.cloudinary.com/camcash17/image/upload/v1517430458/001-toy-train_gapuot.png" />
        </div>
        <div className="reviewList">
          {this.state.dataLoaded ? <div>{this.renderReviews(this.state.reviews)}</div> : ''}
        </div>
      </div>
    );
  }
}
export default Reviews;
