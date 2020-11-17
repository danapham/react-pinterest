import React from 'react';
import boardsData from '../helpers/data/boardsData';
import Board from '../components/Board';
import BoardForm from '../components/Forms/BoardForm';
import getUid from '../helpers/data/authData';

export default class Boards extends React.Component {
  state = {
    boards: [],
  };

  componentDidMount() {
    this.getBoards();
  }

  getBoards = () => {
    const currentUserId = getUid();
    boardsData.getAllBoards(currentUserId).then((res) => this.setState({
      boards: res,
    }));
  }

  render() {
    const { boards } = this.state;
    return (
      <>
      <BoardForm onUpdate={this.getBoards} />
      {boards.map((board) => <Board key={board.firebaseKey} board={board} />)}
      </>
    );
  }
}
