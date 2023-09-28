import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mailOptions, transporter } from '../../config/nodemailer';
import axios from 'axios';
interface mail {
  first_name: string;
  phone: string;
  description: string;
}

const BASEURL = process.env.BASEURL;
// Define a service using a base URL and expected endpoints
export const mailApi = createApi({
  reducerPath: 'mailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (build) => ({
    sendEmail: build.mutation<mail, { id: number; data: mail }>({
      query: ({ id, data }) => ({
        url: 'send-email/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

const apiUrl = 'http://127.0.0.1:8000/api/send-email/';

export const mailApi2 = {
  sendEmail: async (id, data) => {
    try {
      const response = await axios.post(
        `${apiUrl}`,
        { ...data, date: new Date, num_card: 'lol' },
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Token ${localStorage.getItem('token')}`,
          },
          // localStorage.getItem('token')
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSendEmailMutation } = mailApi;
