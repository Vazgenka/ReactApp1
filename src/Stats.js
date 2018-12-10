import React, { Component } from 'react';

class Stats extends Component {
  constructor (props) {
    super(props)

    this.state = {
      barsCount: this.props.count,
      currentPlayer: 1
    }
  }

  render () {

    return (
      <div>
        <p id="count">Bars on the table: {this.state.barsCount}</p>
        <p id="player">{this.state.currentPlayer} Player's turn</p>
      </div>
    )
  }
}

export default Stats
