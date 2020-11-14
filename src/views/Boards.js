import React from 'react';
import boardsData from '../helpers/data/boardsData';
import Board from '../components/Board';

export default class Boards extends React.Component {
  state = {
    boards: [],
  };

  componentDidMount() {
    this.getBoards();
  }

  getBoards = () => boardsData.getAllBoards().then((res) => this.setState({
    boards: res,
  }))

  render() {
    const { boards } = this.state;
    return (
      boards.map((board) => <Board key={board.firebaseKey} board={board} />)
    );
  }
}
