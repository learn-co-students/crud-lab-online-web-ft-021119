import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.props.restaurant.reviews}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {addReview: review => dispatch({type: "ADD_REVIEW", review: review})}
}

export default connect(null, mapDispatchToProps)(ReviewsContainer)
