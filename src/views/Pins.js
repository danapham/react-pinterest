import React, { Component } from 'react';
import Pin from '../components/Pin';
import pinData from '../helpers/data/pinData';

export default class Pins extends Component {
  state = {
    pins: [],
  }

  componentDidMount() {
    this.getPins();
  }

  getPins = () => {
    pinData.getPins().then((res) => this.setState({
      pins: res,
    }));
  }

  render() {
    const { pins } = this.state;
    const renderPins = () => (
      pins.map((pin) => (<Pin pin={pin} />))
    );

    return (
      <>
      <div>
        <h1>Pins</h1>
        {renderPins()}
      </div>
      </>
    );
  }
}
