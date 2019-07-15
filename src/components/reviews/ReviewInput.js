import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }

    handleOnChange = (e) => {
      this.setState({
      text: e.target.value
      })
    }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}>
          </input>
          <input
            type="submit">
          </input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
