import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let review = {restaurantId: this.props.restaurant.id, text: this.state.text}

    this.props.addReview(review)

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
