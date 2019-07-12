import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: ""
    }
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" value={this.state.text} onChange={(event) => this.handleChange(event)}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
