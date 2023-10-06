import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
interface IEmail {
  email: string;
  password: string;
}

interface IPhone {
  phone: string;
  password: string;
}

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api/auth/token/login/',
  }),
  endpoints: (builder) => ({
    getUserByEmail: builder.mutation<string, IEmail>({
      query: ({ email, password }) => ({
        url: 'auth/token-email',
        method: 'POST',
        body: {
          email: email,
          password: password,
        },
      }),
    }),
    getUserByPhone: builder.mutation<string, IPhone>({
      query: ({ phone, password }) => ({
        url: 'auth/token-phone',
        method: 'POST',
        body: {
          phone: phone,
          password: password,
        },
      }),
    }),
  }),
});

export const testFetch = async (obj: IPhone) => {
  const res = await fetch('http://127.0.0.1:8000/api/auth/token/login/', {
    // url: 'auth/token-phone',
    method: 'POST',
    headers: {
      // 'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();

  return data;
};

const apiUrl = 'http://127.0.0.1:8000/api/';

export const loginApi2 = {
  getUserByEmail: async (email, password) => {
    try {
      console.log(email, password);
      
      const res = await axios.post(`${apiUrl}auth/token-email/`, {
        email: email,
        password: password,
      });
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  getUserByPhone: async (phone, password) => {
    try {
      console.log(phone, password);

      const res = await axios.post(
        `${apiUrl}auth/token-phone/`,
        {
          phone: phone,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  getInfoByToken: async (token) => {
    const res = await axios.get(`${apiUrl}users/me/`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${token}`,
      },
    });
    
    return await res.data
  },
};
// fName lName Telephone Password rePassword Email

export const regApi = async (
  firstName,
  lastName,
  phone,
  password,
  repassword,
  email
) => {
  const res = await axios.post(
    `${apiUrl}users/`,
    {
      first_name: firstName,
      last_name: lastName,
      phone,
      password,
      re_password: repassword,
      email,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return res.data;
};

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserByEmailMutation, useGetUserByPhoneMutation } =
  loginApi;
