import React, { Component } from 'react';

class Buttons extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPlayer: 1,
      barsCount: 75,
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
    return (
      <div>
        <div id="buttons1">
          <div id="card" class="demo-card-square mdl-card mdl-shadow--2dp">
            <div class="mdl-card__supporting-text">
              <p id="text2">第一個球員</p>
              <p><button id="user11" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.props.clickMethod(1)}}>Take 1</button></p>
              <p><button id="user12" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.props.clickMethod(2)}}>Take 2</button></p>
              <p><button id="user13" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.props.clickMethod(3)}}>Take 3</button></p>
            </div>
          </div>
        </div>
        <div id="buttons2">
          <div id="card" class="demo-card-square mdl-card mdl-shadow--2dp">
            <div class="mdl-card__supporting-text">
              <p id="text3">第二名球員</p>
              <p><button id="user21" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.props.clickMethod(1)}}>Take 1</button></p>
              <p><button id="user22" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.props.clickMethod(2)}}>Take 2</button></p>
              <p><button id="user23" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => {this.props.clickMethod(3)}}>Take 3</button></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Buttons
