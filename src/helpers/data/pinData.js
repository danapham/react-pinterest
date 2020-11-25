/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const baseUrl = 'https://pinterest-77df5.firebaseio.com';

const getPublicPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="private"&equalTo=false`).then((res) => {
    const pinsObj = res.data;
    resolve(Object.values(pinsObj));
  }).catch((err) => reject(err));
});

const getUserPins = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="userId"&equalTo="${uid}"`).then((res) => {
    const pinsObj = res.data;
    const userPins = [];
    Object.keys(pinsObj).forEach((key) => {
      userPins.push(pinsObj[key]);
    });
    resolve(userPins);
  });
});

const createPin = (data) => axios.post(`${baseUrl}/pins.json`, data).then((res) => {
  const fbKey = { firebaseKey: res.data.name };
  axios.patch(`${baseUrl}/pins/${res.data.name}.json`, fbKey);
}).catch((err) => console.warn(err));

const getSinglePin = (pinId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="firebaseKey"&equalTo="${pinId}"`).then((res) => {
    const pinArray = Object.values(res.data);
    resolve(pinArray[0]);
  }).catch((err) => reject(err));
});

const updatePin = (pinId, data) => axios.patch(`${baseUrl}/pins/${pinId}.json`, data);

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

export default {
  getPublicPins, getUserPins, createPin, getSinglePin, updatePin, deletePin,
};
