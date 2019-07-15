import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  renderReviews = () => {
    if (this.props.restaurant.reviews.length > 0) {
      return <Reviews reviews={this.props.restaurant.reviews}/>
    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        {this.renderReviews()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {addReview: review => dispatch({type: "ADD_REVIEW", review: review})}
}

export default connect(null, mapDispatchToProps)(ReviewsContainer)
