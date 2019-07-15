import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    console.log(this.props)
    const filterReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

    const reviews = filterReviews.map(review => {
      return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
    })
    console.log(filterReviews)
    return (
      <ul>
        Reviews
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
