import React, { Component } from 'react';

class Card extends Component {
  render() {
    const style = {
      backgroundImage: 'url(' + this.props.img + ')',
      height: "300px"
    };
    return (
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title" style={style}>
          <h2 className="mdl-card__title-text">{this.props.title}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {this.props.body}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Some Button</a>
        </div>
      </div>
    )
  }
}

export default Card;
