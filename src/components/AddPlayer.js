import React, { Component } from 'react';

export default class  AddPlayer extends Component {
  render () {
    return (
      <div className="add-player">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}