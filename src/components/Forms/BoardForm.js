/* eslint-disable max-len */
import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import getUser from '../../helpers/data/authData';
import boardsData from '../../helpers/data/boardsData';

export default class BoardForm extends Component {
  state = {
    firebaseKey: this.props.board?.firebaseKey || '',
    name: this.props.board?.name || '',
    imageUrl: this.props.board?.imageUrl || '',
    description: this.props.board?.description || '',
    userId: this.props.board?.userId || '',
  }

  componentDidMount() {
    const userId = getUser();
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
      boardsData.createBoard(this.state)
        .then(() => {
          this.props.onUpdate();
        });
    } else {
      boardsData.updateBoard(this.state.firebaseKey, this.state)
        .then(() => {
          this.props.onUpdate(this.props.board.firebaseKey);
        });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Board Form</h1>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='Board Name' className='form-control form-control-lg m-1' required />
        <input type='text' name='description' value={this.state.description} onChange={this.handleChange} placeholder='Board Description' className='form-control form-control-lg m-1' required />
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
