import React from 'react';
import boardPinsData from '../helpers/data/boardPinsData';

export default class SingleBoard extends React.Component {
  state = {
    pins: [],
  }

  // 1. Make a call to the API that returns the pins associated with this board
  // 2. Render the array of pins in state
  // 3. Render pins to dom

  componentDidMount() {
    this.getBoardPins();
  }

  getBoardPins = () => {
    const boardFirebaseKey = this.props.match.params.id;
    boardPinsData.getBoardPins(boardFirebaseKey).then((res) => this.setState({
      pins: res,
    }));
  }

  render() {
    return (
      <div>
        <h1>Single Board</h1>
      </div>
    );
  }
}
