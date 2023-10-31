import React, { useEffect } from 'react';
import styles from '../styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { switchUserProfile } from '../../../redux/slices/user/userSlice';

const TeacherUserProfile = (): JSX.Element => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handler = {
    personalInfo: () => {
      dispatch(switchUserProfile('personalInfo'));
    },
    classSchedule: () => {
      dispatch(switchUserProfile('classSchedule'));
    },
    openWindow: () => {
      dispatch(switchUserProfile('openWindow'));
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

        <div onClick={handler.classSchedule}>Расписание занятий</div>

        <div onClick={handler.openWindow}>График </div>
      </div>
     
    </div>
  );
};

export default TeacherUserProfile;
