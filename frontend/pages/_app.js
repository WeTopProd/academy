import '../styles/global.scss';
import { useEffect, useState } from 'react';
import Layout from '../components/PageComponents/Layout/Layout';
import { Provider } from 'react-redux';
import store, { useAppDispatch, useAppSelector, wrapper } from '../redux/store';
// import store2 from '../ReduxOnReducers/store'
import UniverseModal from '../components/UniversalComponents/UniverseModal/UniverseModal'
import { openModal } from '../redux/slices/modalSlice';
import { sent } from '../redux/slices/sendFormConfirmation';
import { useDispatch } from 'react-redux';


function MyApp({ Component, pageProps }) {
    const isOpen = useAppSelector(state => state.modal)

    return (
        <Provider store={store}>
            <Layout>
               {isOpen && <UniverseModal title ='Оставьте заявку' />}
               
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}


export default wrapper.withRedux(MyApp)
