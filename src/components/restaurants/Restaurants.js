import React, { Component } from 'react';

class Restaurants extends Component {
  render() {
    console.log(this.props.restaurants)
    return(
      <ul>
        Restaurants Component
      </ul>
    );
  }
};

export default Restaurants;