import React, { useEffect } from 'react';
import styles from '../styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { switchUserProfile } from '../../../redux/slices/user/userSlice';

const MainUserProfile = ():JSX.Element => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handler = {
    personalInfo: () => {
      dispatch(switchUserProfile('personalInfo'));
    },
    myCourses: () => {
      dispatch(switchUserProfile('myCourses'));
    },
    history: () => {
      dispatch(switchUserProfile('history'));
    },
    certeficate: () => {
      dispatch(switchUserProfile('certeficate'));
    },
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.block1Wrapper}>
        <h1>Личный кабинет</h1>
        <h2>
          Здравствуйте, {`${user.first_name}`} {`${user.last_name}`}!
        </h2>
      </div>
      <div className={styles.block2Wrapper}>
        <div onClick={handler.personalInfo}>Личные данные</div>

        <div onClick={handler.myCourses}>Мои курсы</div>

        <div onClick={handler.history}>История</div>

        <div onClick={handler.certeficate}>Сертификаты</div>
      </div>
      <div className={styles.block3Wrapper}>
        <span>У вас есть одно бесплатное пробное занятие </span>
        <button>Использовать</button>
      </div>
    </div>
  );
};

export default MainUserProfile;
