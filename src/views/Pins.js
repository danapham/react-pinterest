import React, { Component } from 'react';
import Pin from '../components/Pin';
import pinData from '../helpers/data/pinData';
import getUid from '../helpers/data/authData';
import PinForm from '../components/Forms/PinForm';
import AppModal from '../components/AppModal';

export default class Pins extends Component {
  state = {
    pins: [],
  }

  componentDidMount() {
    this.getPins();
  }

  componentDidUpdate() {
    this.getPins();
  }

  getPins = () => {
    const userId = getUid();
    pinData.getUserPins(userId).then((res) => this.setState({
      pins: res,
    }));
  }

  deletePin = (e) => {
    const pinId = e.target.id;
    pinData.deletePin(pinId);
  }

  render() {
    const { pins } = this.state;
    const renderPins = () => (
      pins.map((pin) => (<Pin key={pin.firebaseKey} pin={pin} deletePin={this.deletePin} />))
    );

    return (
      <>
      <div>
        <h1>My Pins</h1>
        <AppModal title={'Create a Pin'} buttonLabel={'Create a Pin'}><PinForm onUpdate={this.getPins} /></AppModal>
        {renderPins()}
      </div>
      </>
    );
  }
}
