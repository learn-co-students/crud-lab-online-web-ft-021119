import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }


  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)

    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        Add a restaurant
        <form onSubmit={this.handleOnSubmit} >
          Name: <input type="text"
          value={this.state.content}
          onChange={this.handleOnChange}

          value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
