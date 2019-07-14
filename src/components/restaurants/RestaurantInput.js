import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" onChange={event => this.handleChange(event)}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};


export default (RestaurantInput);
