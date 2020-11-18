import React from 'react';
import boardPinsData from '../helpers/data/boardPinsData';
import BoardForm from '../components/Forms/BoardForm';
import boardsData from '../helpers/data/boardsData';
import Pin from '../components/Pin';
import AppModal from '../components/AppModal';

export default class SingleBoard extends React.Component {
  state = {
    pins: [],
    board: [],
  }

  // 1. Make a call to the API that returns the pins associated with this board
  // 2. Render the array of pins in state
  // 3. Render pins to dom

  componentDidMount() {
    const boardFirebaseKey = this.props.match.params.id;
    this.getBoardPins(boardFirebaseKey);
    this.getBoard(boardFirebaseKey);
  }

  getBoardPins = (fbKey) => {
    boardPinsData.getBoardPins(fbKey).then((res) => {
      const boardPins = [];
      res.forEach((pin) => {
        boardPins.push(boardPinsData.getPin(pin.pinId));
      });
      return Promise.all([...boardPins]);
    });
  }

  setPins = () => this.setState({
    pins: this.getBoardPins(),
  });

  getBoard = (fbKey) => {
    boardsData.getSingleBoard(fbKey).then((res) => this.setState({
      board: res,
    }));
  }

  renderPins = () => {
    this.state.pins.map((pin) => <Pin pin={pin} />);
  }

  render() {
    return (
      <div>
        <h1>Single Board</h1>
        <AppModal title={'Update Board'} buttonLabel={'Update Board'}>
        { Object.keys(this.state.board).length && <BoardForm board={this.state.board} onUpdate={this.getBoardInfo} />}
        </AppModal>
        {this.renderPins}
      </div>
    );
  }
}
