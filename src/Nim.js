import React, { Component } from 'react';
import Stats from './Stats';
import Bars from './Bars';
import Buttons from'./Buttons';
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
      this.setState({
        currentPlayer: 3 - this.state.currentPlayer,
        barsCount: this.state.barsCount - amount,
      })
  }

  onButtonClick(amount) {
    alert(amount)
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

  render () {

    return (
      <div id="all">
        <div id="game">
          <div id="stats">
            <Stats currentPlayer={this.state.currentPlayer} barsCountStats={this.state.barsCount} />
          </div>
          <div id="bars">
            <Bars barsCountBars={this.state.barsCount} currentPlayer={this.state.currentPlayer}/>
          </div>
          <div id="buttons">
            <Buttons clickMethod={this.removeBars.bind(this)} currentPlayer={this.state.currentPlayer} barsCount={this.state.barsCount}/>
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
