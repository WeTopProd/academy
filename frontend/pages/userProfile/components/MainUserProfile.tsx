import React, { useEffect } from 'react';
import styles from '../styles.module.scss';
import { useAppSelector } from '../../../redux/store';

const MainUserProfile = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.block1Wrapper}>
        <h1>Личный кабинет</h1>
        <h2>
          Здравствуйте, {`${user.first_name}`} {`${user.last_name}`}!
        </h2>
      </div>
      <div className={styles.block2Wrapper}>
        <div>Личные данные</div>
        <div>Мои курсы</div>
        <div>История</div>
        <div>Сертификаты</div>
      </div>
      <div className={styles.block3Wrapper}>
        <span>У вас есть одно бесплатное пробное занятие </span>
        <button>Использовать</button>
      </div>
    </div>
  );
};

export default MainUserProfile;
