import React, { useEffect, useState } from 'react';
import styles from '../styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

import InputEdit from './InputEdit';

import { userApi } from '../../../redux/api/userApi';
import EditPasswordInput from './EditPasswordInput';

const EditUserBlock4 = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [oldPassowrd, setOldPassowrd] = useState('');
  const [passowrd, setPassowrd] = useState('');
  const [rePassowrd, setRePassowrd] = useState('');

  const handler = {
    oldPassowrd: (e) => {
      setOldPassowrd(e.target.value);
    },
    passowrd: (e) => {
      setPassowrd(e.target.value);
    },
    rePassowrd: (e) => {
      setRePassowrd(e.target.value);
    },
  };

  const onSubmit = (e) => {
    userApi
      .editUserPassword(user.token, passowrd, rePassowrd, oldPassowrd)
      .then((data) => {
        data.status
          ? alert('password Changed Successfully')
          : alert('an error has occured');
      });
  };

  return (
    <div className={styles.block4Wrapper}>
      <div>
        <h3 style={{ marginTop: '25%' }}>Изменение пароля</h3>
      </div>
      {/*  */}
      <div className={styles.passowrdEditInputsWrapper}>
        <EditPasswordInput
          title={'Старый пароль'}
          value={oldPassowrd}
          handler={handler.oldPassowrd}
        />
        <EditPasswordInput
          title={'Новый пароль'}
          value={passowrd}
          handler={handler.passowrd}
        />
        <EditPasswordInput
          title={'Повторите новый пароль'}
          value={rePassowrd}
          handler={handler.rePassowrd}
        />
        <button className={styles.submitButtun} onClick={onSubmit}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default EditUserBlock4;
