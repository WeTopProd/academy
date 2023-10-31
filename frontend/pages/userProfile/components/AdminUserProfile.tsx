import React, { useEffect } from 'react';
import styles from '../styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { switchUserProfile } from '../../../redux/slices/user/userSlice';

const AdminUserProfile = (): JSX.Element => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handler = {
    adminTeacherControl: () => {
      dispatch(switchUserProfile('adminTeacherControl'));
    },
    adminStudentControl: () => {
      dispatch(switchUserProfile('adminStudentControl'));
    },
    adminSchedulesControl: () => {
      dispatch(switchUserProfile('adminSchedulesControl'));
    },
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.block1Wrapper}>
        <h1>Личный кабинет Администратора</h1>
        <h2>
          Здравствуйте, {`${user.first_name}`} {`${user.last_name}`}!
        </h2>
      </div>
      <div className={styles.block2Wrapper}>
        <div onClick={handler.adminTeacherControl}>Учителя</div>

        <div onClick={handler.adminStudentControl}>Ученики</div>

        <div onClick={handler.adminSchedulesControl}>Графики</div>
      </div>
    </div>
  );
};

export default AdminUserProfile;
