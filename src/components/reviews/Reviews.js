import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const {reviews, restaurantId, deleteReview} = this.props

    if (reviews){
      const thisRestaurantReviews = reviews.filter(review => review.restaurantId === restaurantId)

      const reviewList = thisRestaurantReviews.map((review, index) => {
        return (
          <Review
            key={index}
            review={review}
            deleteReview={deleteReview}
          />
        )
      })

      return(
        <div>
          <h3>List of Reviews(reviews component)</h3>
          <ul>
            {reviewList}
          </ul>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Reviews
