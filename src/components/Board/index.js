/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Boards extends Component {
  render() {
    const { board, deleteBoard } = this.props;

    return (
      <div className="card" style={{ width: '18rem' }}>
      <img src={board.imageUrl} className="card-img-top" alt={`image of ${board.name}`} ></img>
      <div className="card-body">
        <p className="card-text">{board.name}</p>
        <Link className='btn btn-primary' to={`/boards/${board.firebaseKey}`}>View Board</Link>
        <button id={board.firebaseKey} className='btn btn-primary' onClick={(e) => deleteBoard(e)}>Delete</button>
      </div>
    </div>
    );
  }
}

export default Boards;
