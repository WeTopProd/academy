import React, { useEffect, useState } from 'react';
import styles from '../styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { switchUserProfile } from '../../../redux/slices/user/userSlice';
import InputEdit from './InputEdit';

const EditUserBlock3 = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [first_name, setFirst_name] = useState(user.first_name);
  const [last_name, setLast_name] = useState(user.last_name);
  const [phone, setPhone] = useState(user.phone);

  const handler = {
    first_name: (e) => {
      setFirst_name(e.target.value);
    },
    last_name: (e) => {
      setLast_name(e.target.value);
    },
    phone: (e) => {
      setPhone(e.target.value);
    },
  };

  return (
    <div className={styles.block3wrapper}>
      <div className={styles.innerBlock1}>
        <h1>О себе</h1>
        <span>
          Вносите реальные данные, потому что они будут отображены в сертификате
        </span>
      </div>
      <div className={styles.innerBlock2}>
        <InputEdit title={'Имя'} value={first_name} handler={handler.first_name}/>
        <InputEdit title={'Фамилия'} value={last_name} handler={handler.last_name}/>
        <InputEdit title={'Телефон'} value={phone} handler={handler.phone}/>

      </div>
    </div>
  );
};

export default EditUserBlock3;
