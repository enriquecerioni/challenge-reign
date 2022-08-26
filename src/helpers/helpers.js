import axios from 'axios';
const API_URL = 'https://hn.algolia.com/api/v1/search_by_date';

export const reqAxios = async (method, shortUrl, param, data) => {
    try {
      const res = await axios({
        method: method,
        url: API_URL + shortUrl,
        params: param,
        data: data,
      });
      return res;
    } catch (error) {
      return error;
    }
};