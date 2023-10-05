import React, { useEffect, useState } from 'react';
import styles from '../styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { switchUserProfile } from '../../../redux/slices/user/userSlice';
import { phoneForBackend } from '../functions/userDataCollect';
import InputEdit from './InputEdit';
import { userEdit } from '../../../redux/slices/user/userSlice';
import { userApi } from '../../../redux/api/userApi';

const EditUserBlock3 = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [first_name, setFirst_name] = useState(user.first_name);
  const [last_name, setLast_name] = useState(user.last_name);
  const [phone, setPhone] = useState(user.phone);
  const [date_of_birth, setDate_of_birth] = useState(user.date_of_birth);

  const handler = {
    first_name: (e) => {
      setFirst_name(e.target.value);
    },
    last_name: (e) => {
      setLast_name(e.target.value);
    },

    phone: (e) => {
      setPhone(phoneForBackend(e.target.value));
      console.log(phone);
    },
    date_of_birth: (e) => {
      setDate_of_birth(e.target.value);
      console.log(e.target.value);
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newUserData = {
      first_name,
      last_name,
      email: user.email,
      phone: `${phone}`,
      date_of_birth: date_of_birth,
    };

    first_name &&
      last_name &&
      phone.length == 12 &&
      userApi
        .editUser(user.token, newUserData)
        .then((data) => dispatch(userEdit(data)));
  };

  return (
    <div className={styles.block3wrapper}>
      <div className={styles.innerBlock1}>
        {/* <h1></h1> */}
        <span style={{ marginTop: '25%' }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          Вносите реальные данные, <br />
          потому что они будут отображены <br />в сертификате
        </span>
      </div>
      <div className={styles.innerBlock2}>
        <InputEdit
          title={'Имя'}
          value={first_name}
          handler={handler.first_name}
        />
        <InputEdit
          title={'Фамилия'}
          value={last_name}
          handler={handler.last_name}
        />
        <InputEdit title={'Телефон'} value={phone} handler={handler.phone} />
        <InputEdit
          title={'Дата рождения'}
          value={date_of_birth}
          handler={handler.date_of_birth}
        />

        <button onClick={onSubmit}>submit</button>
      </div>
    </div>
  );
};

export default EditUserBlock3;
