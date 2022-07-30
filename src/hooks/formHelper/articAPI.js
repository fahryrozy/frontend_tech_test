/* eslint-disable no-console */
import axios from 'axios';
import Config from 'react-native-config';

export const fetchArticAPI = async (method, params, body) => {
  try {
    const req = await axios({
      method,
      url: Config.ARTIC_URL + params,
      data: body
    });

    if (req.status !== 400) {
      return req;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};
