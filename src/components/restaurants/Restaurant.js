import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = (restaurant) => {
    this.props.delete(restaurant.id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.handleClick(restaurant)}> X </button>
          <ReviewsContainer restaurantId={restaurant.id} restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
