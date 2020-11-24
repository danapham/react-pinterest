import React, { Component } from 'react';
import Pin from '../components/Pin';
import pinData from '../helpers/data/pinData';
import getUid from '../helpers/data/authData';
import PinForm from '../components/Forms/PinForm';

export default class Pins extends Component {
  state = {
    pins: [],
  }

  componentDidMount() {
    this.getPins();
  }

  getPins = () => {
    const userId = getUid();
    pinData.getUserPins(userId).then((res) => this.setState({
      pins: res,
    }));
  }

  render() {
    const { pins } = this.state;
    const renderPins = () => (
      pins.map((pin) => (<Pin key={pin.firebaseKey} pin={pin} />))
    );

    return (
      <>
      <div>
        <h1>My Pins</h1>
        <PinForm onUpdate={this.getPins} />
        {renderPins()}
      </div>
      </>
    );
  }
}
