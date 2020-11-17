import axios from 'axios';

const baseUrl = 'https://pinterest-77df5.firebaseio.com/';

const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins-boards.json?orderBy="boardId"&equalTo="${boardId}"`).then((response) => {
    const pins = response.data;
    const boardPins = [];
    if (pins) {
      Object.keys(pins).forEach((pinKey) => {
        boardPins.push(pins[pinKey]);
      });
      resolve(boardPins);
    }
  }).catch((err) => reject(err));
});

export default getBoardPins;
