import Axios from 'axios';

export const teachersApi = {
  url: 'http://127.0.0.1:8000/api',
  get: async () => {
    try {
      const res = await Axios.get(`${teachersApi.url}/teachers/`);

      return await res.data;
    } catch (error) {
      return error;
    }
  },
  patch: async (id, data, token) => {
    try {
      const res = await Axios.request({
        url: `${teachersApi.url}/teachers/${id}/`,
        method: 'PATCH',
        data: data,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Token ${token}`,
        },
      });
      return await res;
    } catch (error) {
      return error;
    }
  },
  openWindow: async (token, data) => {
    // teachers_openWindow_Sceduele
    const res = await Axios.request({
      url: `${teachersApi.url}/users/me/`,
      method: 'PATCH',
      data: {teachers_openWindow_Sceduele:data},
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${token}`,
      },
    });
  },
};
