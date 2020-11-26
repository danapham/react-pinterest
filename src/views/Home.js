/* eslint-disable consistent-return */
import React, { Component } from 'react';
import Auth from '../components/Auth/index';
import pinData from '../helpers/data/pinData';
import Pin from '../components/Pin';

export default class Home extends Component {
  state = {
    pins: [],
  }

  componentDidMount() {
    this.getPins();
  }

  getPins = () => {
    pinData.getPublicPins().then((res) => this.setState({
      pins: res,
    }));
  }

  loadComponent = () => {
    let component = '';
    if (this.props.authed) {
      component = this.state.pins.map((pin) => (<Pin key={pin.firebaseKey} pin={pin} />));
    } else {
      component = <Auth />;
    }
    return component;
  };

  render() {
    return (
      <div>
        <h1>Welcome to Pinterest!</h1>
        {this.loadComponent()}
      </div>
    );
  }
}
