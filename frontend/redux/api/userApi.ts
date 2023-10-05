import axios from 'axios';

const apiUrl = 'http://127.0.0.1:8000/api/';

export const userApi = {
  getInfoByToken: async (token) => {
    const res = await axios.get(`${apiUrl}users/me/`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${token}`,
      },
    });

    return await res.data;
  },
  editUser: async (token, user) => {
    const res = await axios.request({
      method: 'PUT',
      data: user,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${token}`,
      },
      url: `${apiUrl}users/me/`,
    });

    return await { ...user, token };
  },
};
