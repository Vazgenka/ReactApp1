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

  startAgain() {
    this.setState({
      currentPlayer: 3 - this.state.currentPlayer,
      barsCount: this.props.count,
    })
    if (document.getElementById("game")) {
      document.getElementById("game").style.display = "block";
    }
    if (document.getElementById("end")) {
      document.getElementById("end").style.display = "none";
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
      if (document.getElementById("user21")) {
          document.getElementById("user21").disabled = true;
      }
      if (document.getElementById("user11")) {
          document.getElementById("user11").disabled = false;
      }
      if (document.getElementById("user22")) {
          document.getElementById("user22").disabled = true;
      }
      if (document.getElementById("user12")) {
          document.getElementById("user12").disabled = false;
      }
      if (document.getElementById("user23")) {
          document.getElementById("user23").disabled = true;
      }
      if (document.getElementById("user13")) {
          document.getElementById("user13").disabled = false;
      }





    } else {
      if (document.getElementById("user21")) {
          document.getElementById("user21").disabled = false;
      }
      if (document.getElementById("user11")) {
          document.getElementById("user11").disabled = true;
      }
      if (document.getElementById("user22")) {
          document.getElementById("user22").disabled =false;
      }
      if (document.getElementById("user12")) {
          document.getElementById("user12").disabled = true;
      }
      if (document.getElementById("user23")) {
          document.getElementById("user23").disabled = false;
      }
      if (document.getElementById("user13")) {
          document.getElementById("user13").disabled = true;
      }
    }
  }

  render () {

    if (this.state.barsCount <= 1) {
      alert("Player " + this.state.currentPlayer + " has lost!")
      if (document.getElementById("game")) {
        document.getElementById("game").style.display = "none";
      }
      if (document.getElementById("end")) {
        document.getElementById("end").style.display = "block";
      }
    }

    var barsList  = []

    for (var i = 1; i <= this.state.barsCount; i++) {
      barsList.push(<i class="material-icons">navigation</i>)
    }

    return (
      <div id="all">
        <div id="game">
          <div id="stats">
            <p id="count">Bars on the table: {this.state.barsCount}</p>
            <p id="player">{this.state.currentPlayer} Player's turn</p>
          </div>
          <div id="bars">
            <div id="card2" class="demo-card-square mdl-card mdl-shadow--2dp">
              <div class="mdl-card__supporting-text">
                <p id="forBars">{barsList}</p>
              </div>
            </div>
          </div>
          <div id="buttons1">
            <div id="card" class="demo-card-square mdl-card mdl-shadow--2dp">
              <div class="mdl-card__supporting-text">
                <p id="text2">第一個球員</p>
                <p><button id="user11" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(1)}}>Take 1</button></p>
                <p><button id="user12" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(2)}}>Take 2</button></p>
                <p><button id="user13" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(3)}}>Take 3</button></p>
              </div>
            </div>
          </div>
          <div id="buttons2">
            <div id="card" class="demo-card-square mdl-card mdl-shadow--2dp">
              <div class="mdl-card__supporting-text">
                <p id="text3">第二名球員</p>
                <p><button id="user21" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(1)}}>Take 1</button></p>
                <p><button id="user22" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(2)}}>Take 2</button></p>
                <p><button id="user23" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.removeBars(3)}}>Take 3</button></p>
              </div>
            </div>
          </div>
        </div>
        <div id="end">
          <p id="thEnd">Game Over!</p>
          <p id="choice">Would you like to try again?</p>
          <div id="choice1">
            <div id="card" class="demo-card-square mdl-card mdl-shadow--2dp">
              <div class="mdl-card__supporting-text">
                <button id="No" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.startAgain()}}>Yes</button>
                <button id="Yes" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">No</button>
                <p id="Text">單擊是</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Nim;
