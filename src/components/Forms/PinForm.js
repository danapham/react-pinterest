import React, { Component } from 'react';
import firebase from 'firebase/app';
import pinData from '../../helpers/data/pinData';
import getUid from '../../helpers/data/authData';

export default class PinForm extends Component {
  state = {
    firebaseKey: this.props.pin?.firebaseKey || '',
    name: this.props.pin?.name || '',
    imageUrl: this.props.pin?.imageUrl || '',
    description: this.props.pin?.description || '',
    userId: this.props.pin?.userId || '',
    private: this.props.pin?.private || '',
  }

  componentDidMount() {
    const userId = getUid();
    this.setState({
      userId,
    });
  }

  handleChange = (e) => {
    if (e.target.name === 'filename') {
      this.setState({ imageUrl: '' });
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`pinterest/${this.state.userId}/${Date.now()}${e.target.files[0].name}`);

      imageRef.put(e.target.files[0]).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((imageUrl) => {
          this.setState({ imageUrl });
        });
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.firebaseKey === '') {
      pinData.createPin(this.state)
        .then(() => {
          this.props.onUpdate();
        });
    } else {
      pinData.updateBoard(this.state.firebaseKey, this.state)
        .then(() => {
          this.props.onUpdate(this.props.pin.firebaseKey);
        });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Pin Form</h1>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          placeholder='Pin Name'
          className='form-control form-control-lg m-1'
          required
        />
        <input
          type='text'
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
          placeholder='Pin Description'
          className='form-control form-control-lg m-1'
          required
        />
        <input
          type='url'
          name='imageUrl'
          value={this.state.imageUrl}
          onChange={this.handleChange}
          placeholder='Enter an image URL or upload a file.'
          className='form-control form-control-lg m-1'
          required
        />
        <input
          type='checkbox'
          name='private'
          value={this.state.private}
          onChange={this.handleChange}
        />
        <label for='private'>Make pin private</label>
        <input
          className='m-2'
          type='file'
          id='myFile'
          name='filename'
          accept='image/*'
          onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}
