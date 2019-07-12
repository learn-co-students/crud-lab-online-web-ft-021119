import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  generateReviews(){
    return this.props.reviews.filter(review => review.restaurantId == this.props.restaurantId).map(review => <Review review={review} delete={this.props.delete}/>)
  }

  render() {
    return (
      <ul>
        {this.generateReviews()}
      </ul>
    );
  }
};

export default Reviews;