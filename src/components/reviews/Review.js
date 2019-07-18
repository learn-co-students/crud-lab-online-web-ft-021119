import React, { Component } from 'react';

class Review extends Component {
handleDelete = () => {

  this.props.deleteReview(this.props.review.id)
}

  render() {
    console.log("reviews render",this.props)
    const text = this.props.review.text

    return (
      
      <div> 
         <li>
          {text.text}
          <button onClick={this.handleDelete}> X </button>
          
        </li>
      </div>
    );
  }

};

export default Review;
