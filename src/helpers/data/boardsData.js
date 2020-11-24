/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const baseUrl = 'https://pinterest-77df5.firebaseio.com/';

const getAllBoards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="userId"&equalTo="${uid}"`).then((response) => {
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

const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards/${boardId}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const createBoard = (data) => axios.post(`${baseUrl}/boards.json`, data)
  .then((res) => {
    const fbKey = { firebaseKey: res.data.name };
    axios.patch(`${baseUrl}/boards/${res.data.name}.json`, fbKey);
  }).catch((err) => console.warn(err));

const updateBoard = (fbKey, data) => axios.patch(`${baseUrl}/boards/${fbKey}.json`, data);

const deleteBoard = (fbKey) => axios.delete(`${baseUrl}/boards/${fbKey}.json`);

export default {
  getAllBoards, createBoard, updateBoard, getSingleBoard, deleteBoard,
};
