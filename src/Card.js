import React, { Component } from 'react';

class Card extends Component {
  render() {

    const style = {
      backgroundImage: 'url(' + this.props.img + ')',
      height: "300px",
      color: "red",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    };
    const style2 = {
      backgroundImage: 'url(' + this.props.img2 + ')',
      height: "300px",
      color: "red",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    };
    const style3 = {
      backgroundImage: 'url(' + this.props.img3 + ')',
      height: "300px",
      color: "red",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    };
    const h2 = {
      color: "#BA27AC",
      fontWeight: "400",
      fontSize: "30px",
      marginBottom: "-26px",
    }

    return (
      <div>
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title" style={style}>
            <h2 className="mdl-card__title-text" style={h2}>{this.props.title}</h2>
            </div>
          <div className="mdl-card__supporting-text">
            {this.props.body}
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Some Button</a>
          </div>
        </div>
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title" style={style2}>
            <h2 className="mdl-card__title-text" style={h2}>{this.props.title2}</h2>
          </div>
          <div className="mdl-card__supporting-text">
            {this.props.body2}
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Some Button</a>
          </div>
        </div>
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title" style={style3}>
            <h2 className="mdl-card__title-text" style={h2}>{this.props.title3}</h2>
          </div>
          <div className="mdl-card__supporting-text">
            {this.props.body3}
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Some Button</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
