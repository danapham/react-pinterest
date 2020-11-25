/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import pinData from '../helpers/data/pinData';
import AppModal from '../components/AppModal';
import PinForm from '../components/Forms/PinForm';

export default class PinDetails extends Component {
  state = {
    pin: {},
  }

  componentDidMount() {
    const pinId = this.props.match.params.id;
    this.getPin(pinId);
  }

  getPin = (pinId) => {
    pinData.getSinglePin(pinId).then((res) => this.setState({
      pin: res,
    }));
  }

  render() {
    const { pin } = this.state;

    return (
      <div>
        <AppModal title={'Update Pin'} buttonLabel={'Update Pin'}><PinForm pin={pin} onUpdate={this.getPin} />Edit Pin</AppModal>
        <h1>{pin.name}</h1>
        <img src={pin.imageUrl} alt={`image of ${pin.name}`}></img>
        <p>{pin.description}</p>
      </div>
    );
  }
}
