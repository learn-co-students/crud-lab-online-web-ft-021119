import React, { Component } from 'react';

class Review extends Component {

  handleClick(event){
    event.preventDefault()
    this.props.delete(this.props.review.id)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={(event) => this.handleClick(event)}> X </button>
      </div>
    );
  }

};

export default Review;
