import React, { Component } from 'react';
import boardsData from '../../helpers/data/boardsData';
import getUid from '../../helpers/data/authData';
import boardPinsData from '../../helpers/data/boardPinsData';

export default class PinItForm extends Component {
  state = {
    boards: [],
    selected: '',
  }

  componentDidMount() {
    const uid = getUid();
    boardsData.getAllBoards(uid).then((res) => this.setState({
      boards: res,
      selected: res[0].firebaseKey,
    }));
  }

  renderBoards = () => (
    this.state.boards.map((board) => (<option key={board.firebaseKey} value={board.firebaseKey}>{board.name}</option>)))

  handleChange = (e) => {
    this.setState({
      selected: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const boardPin = {
      pinId: this.props.pinId,
      boardId: this.state.selected,
      userId: getUid(),
    };

    boardPinsData.createBoardPin(boardPin);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Select a board
        <select value={this.state.selected} onChange={this.handleChange}>
          {this.renderBoards()}
        </select>
        </label>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}
