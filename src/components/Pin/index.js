/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

export default class Pin extends Component {
  state = { }

  render() {
    const { pin } = this.props;
    return (
      <div className="card" style={{ width: '18rem' }}>
      <img src={pin.imageUrl} className="card-img-top" alt={`image of ${pin.name}`} ></img>
      <div className="card-body">
        <p className="card-text">{pin.name}</p>
      </div>
    </div>
    );
  }
}
