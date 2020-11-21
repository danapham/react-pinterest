/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const baseUrl = 'https://pinterest-77df5.firebaseio.com';

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins`).then((res) => {
    resolve(res);
  }).catch((err) => reject(err));
});

export default { getPins };
