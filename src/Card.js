import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">{this.props.title}</h2>
        </div>
        <div class="mdl-card__supporting-text">
          {this.props.body}
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Some Button</a>
        </div>
      </div>
    )
  }
}

export default Card;
