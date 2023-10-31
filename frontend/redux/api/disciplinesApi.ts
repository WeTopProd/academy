import Axios from 'axios';

export const disciplinesApi = {
  url: 'http://127.0.0.1:8000/api',
  get: async () => {
    const res = await Axios.get(`${disciplinesApi.url}/discipline/`);

    return res.data;
  },
  post: async (token, disObj) => {
    const res = await Axios.request({
      method: 'POST',
      url: `${disciplinesApi.url}/registration/`,
      headers: { authorization: `Token ${token}` },
      data: disObj,
    });

    const data = await res;
  },
};
