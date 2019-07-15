import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: "",
    restaurantId: this.props.restaurant.id
}
  

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({restaurantId: this.props.restaurant.id})
    this.props.addReview(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit" value="Submit Review"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
