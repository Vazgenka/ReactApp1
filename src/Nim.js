import React, { Component } from 'react';
import './Nim.css';

class Nim extends Component {

  constructor (props) {
    super(props)

    this.state = {
      barsCount: this.props.count,
      currentPlayer: 1
    }
  }

  removeBars(amount) {
    if (this.state.barsCount != 1) {
      this.setState({
        currentPlayer: 3 - this.state.currentPlayer,
        barsCount: this.state.barsCount - amount,
      })
    }
  }


  render () {
    if (this.state.currentPlayer == 1) {
      document.getElementById("user2").disabled = true;
    } else {
      document.getElementById("user1").disabled = true;
    }

    if (this.state.barsCount < 2) {
      alert("Player " + this.state.currentPlayer + " has lost!")
      document.getElementById("game").remove()
    }

    var barsView  = ""

    for (var i = 1; i <= this.state.barsCount; i++) {
      barsView += "|"
    }

    return (
      <div id="game">
        <div id="stats">
          <p id="count">Палочек на столе: {this.state.barsCount}</p>
          <p id="player">Ходит игрок: {this.state.currentPlayer}</p>
        </div>
        <div id="bars">
          <p id="forBars">{barsView}</p>
        </div>
        <div id="buttons1">
          <p><button id="user1" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(1)}}>Взять 1</button></p>
          <p><button id="user1" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(2)}}>Взять 2</button></p>
          <p><button id="user1" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(3)}}>Взять 3</button></p>
        </div>
        <div id="buttons2">
          <p><button id="user2" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(1)}}>Взять 1</button></p>
          <p><button id="user2" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(2)}}>Взять 2</button></p>
          <p><button id="user2" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(3)}}>Взять 3</button></p>
        </div>
      </div>
    )
  }
}

export default Nim;
