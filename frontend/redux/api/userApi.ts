import Password from 'antd/es/input/Password';
import axios from 'axios';
// import FormData from 'form-data'

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
      method: 'PATCH',
      data: user,
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type-2': 'multipart/form-data',
        authorization: `Token ${token}`,
      },
      url: `${apiUrl}users/me/`,
    });

    return await { ...user, token };
  },
  editUserPassword: async (token, passowrd, rePassowrd, oldPassowrd) => {
    const res = await axios
      .request({
        method: 'POST',

        data: {
          new_password: passowrd,
          re_new_password: rePassowrd,
          current_password: oldPassowrd,
        },

        headers: {
          'Content-Type': 'application/json',
          authorization: `Token ${token}`,
        },
        url: `${apiUrl}users/set_password/`,
      })
      .then((data) => {
        return { status: true };
      })
      .catch((err) => {
        return { status: false, error: err };
      });
    return await res;

    // return await { token };
  },
  userLogOut: async (token) => {
    
    const res = await axios.request({
      method:'POST',
      url: `${apiUrl}auth/token/logout/`,
      headers: {
        'Content-Type': 'application/json',

        authorization: `Token ${token}`,
      },
    });
    return true
  },
  editUserPhoto: async (token, photo) => {
    // const res = await axios.request({
    //   method: 'PATCH',
    //   data:  photo ,
    //   headers: {
    //     // 'Content-Type': 'application/json',
    //     'Content-Type': 'multipart/form-data',
    //     // ...photo.getHeaders(),
    //     authorization: `Token ${token}`,
    //   },
    //   url: `${apiUrl}users/me/`,
    // });

    // const res2 = fetch(`${apiUrl}users/me/`, {
    //   method: 'Patch',
    //   body: {...photo},

    //   headers: {
    //     authorization: `Token ${token}`,
    //   },
    // });

    //     const res3 = await  axios.patch(`https://reiting.moscow/api/resume/${mas.id}/`, {

    //     FullName: FullName,
    //     PhoneNumber: PhoneNumber,
    //     data: data,
    //     city: city,
    //     address: address,

    //     education: education,

    //     AddEducation: AddEducation,
    //     placeWork: placeWork,
    //     postWork: postwork,
    //     DataStart: DataStart,
    //     DataEnd: DataEnd,
    //     About: About,
    //     skills: skills,
    //     startSalary: startSalary,
    //     endSalary: endSalary,
    //     user: userId,
    //     foto: foto ,
    //     recommendation: recommendation,
    //     certificate: certificate,
    //     busyness: busyness,

    // },

    // {
    //     headers : {
    //     'Content-Type': 'application/json , multipart/form-data',
    //     authorization: `Token ${token}`
    //     }
    // })

    const res3 = await axios.patch(
      `${apiUrl}users/me/`,
      { ...photo },
      {
        headers: {
          'Content-Type': 'application/json , multipart/form-data',
          // 'Content-Type-2': 'multipart/form-data',
          authorization: `Token ${token}`,
        },
      }
    );

    return await res3;
  },
};
