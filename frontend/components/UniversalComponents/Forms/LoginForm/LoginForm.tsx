import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './styles.module.scss';
import InputMask from 'react-input-mask';
import * as Api from '../../../../redux/api/loginApi';
import { useEffect } from 'react';
import { phoneForBackend } from '../../../../pages/userProfile/functions/userDataCollect';
// type FormValuesEmail = {
//   email: string;
//   password: string;
// };

// type FormValuesPhone = {
//   phone: string;
//   password: string;
// };

// interface IData {
//   type: string;
//   value: string;
// }

export default function LoginForm({ setLogRegToggler }) {
  // True = Phone, False = Email
  const [toggler, setToggler] = useState(true);

  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  //   const { register, handleSubmit } = useForm<
  //     FormValuesEmail | FormValuesPhone
  //   >();
  //   const onSubmit: SubmitHandler<FormValuesEmail | FormValuesPhone> = async(data) => {
  //     console.log(data);
  //     Api.loginApi2.getUserByPhone().then(data => console.log(data))

  //   };

  const onSubmit = async (e) => {
    e.preventDefault();
    toggler
      ? Api.loginApi2
          .getUserByPhone(phone, password)
          .then((data) => {
            localStorage.setItem('token', data['auth_token']);
            window.location.reload()
          })
          .catch((err) => console.log(err))
      : Api.loginApi2
          .getUserByEmail(email, password)
          .then((data) => {
            localStorage.setItem('token', data['auth_token']);
            window.location.reload()
          })
          .catch((err) => console.log(err));
  };

  return (
    <>
      <ul className={styles.variants_picker}>
        <li
          onClick={() => setToggler(true)}
          className={toggler ? styles.li_active : styles.li}
        >
          По номеру телефона
        </li>
        <li
          onClick={() => setToggler(false)}
          className={!toggler ? styles.li_active : styles.li}
        >
          По почте
        </li>
      </ul>
      {!toggler ? (
        <div className={styles.form_container}>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL"
            />
            <input
              value={password}
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
              type='password'
            />

            <input type="submit" value="Войти" className={styles.submit} />
            <div className={styles.register}>
              <span className={styles.text}>Еще нет аккаунта?</span>
              <span
                className={styles.register_action}
                onClick={() => setLogRegToggler(false)}
              >
                Зарегистрируйтесь!
              </span>
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.form_container}>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <InputMask
              mask="+7(999) 999-99-99"
              maskChar="_"
              placeholder="Номер"
              value={phone}
              onChange={(e) => setPhone(phoneForBackend(e.target.value))}
            />
            <input
              value={password}
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
              type='password'

            />
            <input type="submit" value="Войти" className={styles.submit} />
            <div className={styles.register}>
              <span className={styles.text}>Еще нет аккаунта?</span>
              <span
                className={styles.register_action}
                onClick={() => setLogRegToggler(false)}
              >
                Зарегистрируйтесь!
              </span>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
