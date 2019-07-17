import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ""
  }
  

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({...this.state, restaurantId: this.props.restaurant.id})
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
