import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

console.log("reviews props=", this.props)
const selectedReviews = this.props.reviewList.filter(review => review.text.restaurantId === this.props.restaurantId)
  console.log("selected", selectedReviews)
  const reviews = selectedReviews.map((rev,index)=> {
      return (
        <Review key={index} review={rev} deleteReview={this.props.deleteReview} />
     
      )
    })

    return(
    	
      <ul>
   
        {reviews}
      </ul>
    );
	
  }
};

export default Reviews;