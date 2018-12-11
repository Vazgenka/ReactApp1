import React, { Component } from 'react';
import Nim from './Nim';

class Stats extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div>
        <p id="count">Bars on the table: {this.state.barsCountStats}</p>
        <p id="player">{this.state.currentPlayer} Player's turn</p>
      </div>
    )
  }
}

export default Stats
