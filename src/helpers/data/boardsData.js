import axios from 'axios';

const baseUrl = 'https://pinterest-77df5.firebaseio.com/';

const getAllBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`).then((response) => {
    const boardObjects = response.data;
    const boards = [];
    if (boardObjects) {
      Object.keys(boardObjects).forEach((boardKey) => {
        boards.push(boardObjects[boardKey]);
      });
    }
    resolve(boards);
  }).catch((error) => reject(error));
});

export default getAllBoards;
