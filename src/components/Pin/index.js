/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppModal from '../AppModal';
import PinItForm from '../Forms/PinItForm';

export default class Pin extends Component {
  render() {
    const { pin, deletePin } = this.props;
    return (
      <div className="card" style={{ width: '18rem' }}>
      <img src={pin.imageUrl} className="card-img-top" alt={`image of ${pin.name}`} ></img>
      <div className="card-body">
        <p className="card-text">{pin.name}</p>
        <Link className='btn btn-primary' to={`/pindetails/${pin.firebaseKey}`}>View Pin</Link>
        <button id={pin.firebaseKey} className='btn btn-primary' onClick={(e) => deletePin(e)}>Delete</button>
        <AppModal title={'Pin to Board'} buttonLabel={'Save Pin'}><PinItForm pinId={pin.firebaseKey} /></AppModal>
      </div>
    </div>
    );
  }
}
