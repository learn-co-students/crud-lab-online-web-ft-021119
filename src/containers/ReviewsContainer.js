import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'



class ReviewsContainer extends Component {

  reviews = () => {
    return this.props.reviews.filter((review) => review.restaurantId === this.props.restaurant.id)
  }

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} restaurant={this.props.restaurant} addReview={this.props.addReview} />
        <Reviews restaurantId={this.props.restaurant.id} reviews={this.reviews()} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: formData => dispatch({type: 'ADD_REVIEW', review: { restaurantId: formData.restaurantId, text: formData.text}}),
    deleteReview: payload => dispatch({type: 'DELETE_REVIEW', payload})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
