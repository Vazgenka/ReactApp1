import React, { Component } from 'react';

class Bars extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    if (this.props.barsCountBars <= 1) {
      alert("Player " + this.state.currentPlayer + " has lost!")
      if (document.getElementById("game")) {
        document.getElementById("game").style.display = "none";
      }
      if (document.getElementById("end")) {
        document.getElementById("end").style.display = "block";
      }
    }

    var barsList  = []

    for (var i = 1; i <= this.props.barsCountBars; i++) {
      barsList.push(<i class="material-icons">navigation</i>)
    }

    return (
      <div>
        <div id="card2" class="demo-card-square mdl-card mdl-shadow--2dp">
          <div class="mdl-card__supporting-text">
            <p id="forBars">{barsList}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Bars
