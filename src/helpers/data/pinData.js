/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const baseUrl = 'https://pinterest-77df5.firebaseio.com';

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`).then((res) => {
    const pinsObj = res.data;
    resolve(Object.values(pinsObj));
  }).catch((err) => reject(err));
});

export default { getPins };
