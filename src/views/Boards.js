import React from 'react';
import boardsData from '../helpers/data/boardsData';
import Board from '../components/Board';
import BoardForm from '../components/Forms/BoardForm';
import getUid from '../helpers/data/authData';
import AppModal from '../components/AppModal';

export default class Boards extends React.Component {
  state = {
    boards: [],
  };

  componentDidMount() {
    this.getBoards();
  }

  componentDidUpdate() {
    this.getBoards();
  }

  getBoards = () => {
    const currentUserId = getUid();
    boardsData.getAllBoards(currentUserId).then((res) => this.setState({
      boards: res,
    }));
  }

  deleteBoard = (e) => {
    const fbKey = e.target.id;
    boardsData.deleteBoard(fbKey);
    this.getBoards();
  };

  render() {
    const { boards } = this.state;
    return (
      <>
      <h1>My Boards</h1>
      <AppModal title={'Create Board'} buttonLabel={'Create Board'}><BoardForm onUpdate={this.getBoards} /></AppModal>
      {boards.map((board) => <Board key={board.firebaseKey} board={board} deleteBoard={this.deleteBoard} />)}
      </>
    );
  }
}
