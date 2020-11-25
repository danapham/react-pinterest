/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const baseUrl = 'https://pinterest-77df5.firebaseio.com';

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

const getPin = (pinId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins/${pinId}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const deleteBoardPins = (boardId) => axios.get(`${baseUrl}/pins-boards.json?orderBy="boardId"&equalTo="${boardId}"`).then((res) => {
  const pinKeys = Object.keys(res.data);
  pinKeys.forEach((fbKey) => axios.delete(`${baseUrl}/pins-boards/${fbKey}.json`));
});

const createBoardPin = (data) => axios.post(`${baseUrl}/pins-boards.json`, data);

export default {
  getBoardPins, getPin, deleteBoardPins, createBoardPin,
};
