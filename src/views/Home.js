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

  render() {
    const loadComponent = () => {
      let component = '';
      if (this.props.authed) {
        component = this.state.pins.map((pin) => (<Pin pin={pin} />));
      } else {
        component = <Auth />;
      }
      return component;
    };
    return (
      <div>
        <h1>Welcome to Pinterest!</h1>
        {loadComponent()}
      </div>
    );
  }
}
