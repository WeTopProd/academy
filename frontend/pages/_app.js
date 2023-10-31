import '../styles/global.scss';
import { useEffect, useState } from 'react';
import Layout from '../components/PageComponents/Layout/Layout';
import { Provider } from 'react-redux';
import store, { useAppDispatch, useAppSelector, wrapper } from '../redux/store';
// import store2 from '../ReduxOnReducers/store'
import UniverseModal from '../components/UniversalComponents/UniverseModal/UniverseModal';
import { openModal } from '../redux/slices/modalSlice';
import { sent } from '../redux/slices/sendFormConfirmation';
import { useDispatch } from 'react-redux';
import './modal.css';
import { userInit } from '../redux/slices/user/userSlice';
import { loginApi2 } from '../redux/api/loginApi';
import {disciplinesApi} from '../redux/api/disciplinesApi'
import {disciplineInit} from '../redux/slices/disciplines/disciplinesSlice'
import './disciplines/components/callendarStyle.css'

function MyApp({ Component, pageProps }) {
  const isOpen = useAppSelector((state) => state.modal);
  const user = useAppSelector((state) => state.user.user);



  return (
      <Layout>
        {isOpen && <UniverseModal title="Оставьте заявку" />}

        <Component {...pageProps} />
      </Layout>
  );
}

export default wrapper.withRedux(MyApp);
