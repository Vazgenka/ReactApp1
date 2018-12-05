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

  componentDidUpdate() {
    if (this.state.currentPlayer == 1) {
      document.getElementById("user21").disabled = true;
      document.getElementById("user11").disabled = false;
      document.getElementById("user22").disabled = true;
      document.getElementById("user12").disabled = false;
      document.getElementById("user23").disabled = true;
      document.getElementById("user13").disabled = false;
    } else {
      document.getElementById("user21").disabled = false;
      document.getElementById("user11").disabled = true;
      document.getElementById("user22").disabled = false;
      document.getElementById("user12").disabled = true;
      document.getElementById("user23").disabled = false;
      document.getElementById("user13").disabled = true;
    }
  }

  render () {

    if (this.state.barsCount <= 1) {
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
          <p><button id="user11" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(1)}}>Взять 1</button></p>
          <p><button id="user12" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(2)}}>Взять 2</button></p>
          <p><button id="user13" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(3)}}>Взять 3</button></p>
        </div>
        <div id="buttons2">
          <p><button id="user21" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(1)}}>Взять 1</button></p>
          <p><button id="user22" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(2)}}>Взять 2</button></p>
          <p><button id="user23" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(3)}}>Взять 3</button></p>
        </div>
      </div>
    )
  }
}

export default Nim;
