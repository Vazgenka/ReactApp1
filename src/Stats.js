import React, { Component } from 'react';

class Stats extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div>
        <p id="count">Bars on the table: {this.props.barsCountStats}</p>
        <p id="player">{this.props.currentPlayer} Player's turn</p>
      </div>
    )
  }
}

export default Stats
