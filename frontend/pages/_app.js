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

function MyApp({ Component, pageProps }) {
  const isOpen = useAppSelector((state) => state.modal);
  const user = useAppSelector((state) => state.user.user);

//   const [token, setToken] = useState(0);
//   const dispatch = useAppDispatch();
//   const [useEffectStopper, setUseEffectStopper] = useState(0);
//   useEffect(() => {
//     setToken(localStorage.getItem('token'));

//     token.length > 5 &&
//       token != 0 &&
//       loginApi2.getInfoByToken(token).then((data) => dispatch(userInit(data)));

//     token.length < 5 && setUseEffectStopper((prev) => prev++);
//   }, [useEffectStopper]);

  return (
    // <Provider store={store}>
      <Layout>
        {isOpen && <UniverseModal title="Оставьте заявку" />}

        <Component {...pageProps} />
      </Layout>
    // </Provider>
  );
}

export default wrapper.withRedux(MyApp);
