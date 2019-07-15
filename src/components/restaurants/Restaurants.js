import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    const {restaurants, deleteRestaurant} = this.props

    if (restaurants) {
      const restaurantList = this.props.restaurants.map(restaurant => {

        return (
          <Restaurant
            key={ restaurant.id }
            restaurant={ restaurant }
            deleteRestaurant={ deleteRestaurant }
          />
        )
      })

      return(
        <div>
          <h2>List of Restaurants (restaurants component)</h2>
          <ul>
            {restaurantList}
          </ul>
        </div>
      )
    } else {
      return  null
    }
  }
}

export default Restaurants
