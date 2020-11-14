import axios from 'axios';

const baseUrl = 'https://pinterest-77df5.firebaseio.com/';

const patchFBBoardKeys = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`).then((response) => {
    const keys = Object.keys(response.data);
    keys.forEach((key) => {
      axios.patch(`${baseUrl}/boards/${key}.json`, { firebaseKey: key });
    });
  }).catch((error) => reject(error));
});

const patchFBPinKeys = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`).then((response) => {
    const keys = Object.keys(response.data);
    keys.forEach((key) => {
      axios.patch(`${baseUrl}/pins/${key}.json`, { firebaseKey: key });
    });
  }).catch((error) => reject(error));
});

export { patchFBBoardKeys, patchFBPinKeys };
