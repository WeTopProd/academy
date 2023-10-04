import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { regApi, loginApi2 } from '../../../../redux/api/loginApi';

import styles from './styles.module.scss';
import { closeModal } from '../../../../redux/slices/modalSlice';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../../redux/store';

export const RegistrationForm = ({ setLogRegToggler }) => {
  // fName lName Telephone Password rePassword Email
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');

  const handlers = {
    firstName: (e) => {
      setFirstName(e.target.value);
    },
    lastName: (e) => {
      setLastName(e.target.value);
    },
    phone: (e) => {
      setPhone(e.target.value);
    },
    password: (e) => {
      setPassword(e.target.value);
    },
    rePassword: (e) => {
      setRePassword(e.target.value);
    },
    email: (e) => {
      setEmail(e.target.value);
    },
  };

  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(closeModal(true));
    const res = await regApi(
      firstName,
      lastName,
      phone,
      password,
      rePassword,
      email
    )
      .then(async () => {
        const logRes = await loginApi2.getUserByPhone(phone, password);
        localStorage.setItem('token', logRes['auth_token']);
      })
      .then(() => dispatch(closeModal(true)))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={onSubmit}>
        <input
          value={firstName}
          onChange={handlers.firstName}
          placeholder="First Name"
        />
        <input
          value={lastName}
          onChange={handlers.lastName}
          placeholder="Last Name"
        />
        <InputMask
          mask="+7(999) 999-99-99"
          maskChar="_"
          placeholder="Номер"
          value={phone}
          onChange={handlers.phone}
        />
        <input
          value={password}
          placeholder="Пароль"
          onChange={handlers.password}
        />
        <input
          value={rePassword}
          placeholder="ReПароль"
          onChange={handlers.rePassword}
        />
        <input value={email} onChange={handlers.email} placeholder="EMAIL" />

        <div className={styles.footer}>
          <div
            className={styles.register}
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <span className={styles.text}>Есть аккаунт?</span>
            <span
              className={styles.register_action}
              onClick={() => setLogRegToggler(true)}
            >
              Войдите!
            </span>
          </div>
          <input type="submit" value="Войти" className={styles.submit} />
        </div>
      </form>
    </div>
  );
};
