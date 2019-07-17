import React, { Component } from 'react';
import Restaurant from './Restaurant';
class Restaurants extends Component {
render(){
	// console.log(this.props, "restaurantS")
  
    const restaurants = this.props.restaurantList.map(res => {
      return (
        <Restaurant key={res.id} restaurant={res} deleteRestaurant={this.props.deleteRestaurant} />
     
      )
    })

    return(
      <ul>
    
        {restaurants}
      </ul>
    );
};
};

export default Restaurants;