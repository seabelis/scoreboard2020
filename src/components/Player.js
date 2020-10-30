// components/Player.js

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Player extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  handleClick = () => {
    // do something when button is clicked
  }

  render() {
    return (
      <li className = "player">
        <p className = "name">{this.props.name}</p>
        <p className = "score">{this.props.score}</p>
        <button onClick={this.handleClick}>+</button>
      </li>
    )
  }
}