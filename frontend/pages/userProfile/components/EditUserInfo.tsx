import React, { useEffect } from 'react';
import styles from '../styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { switchUserProfile } from '../../../redux/slices/user/userSlice';
import userPhoto from '../../../public/imgs/icons/userPhoto.png';
import Image from 'next/image';
import UserInfo_Logout from './UserInfo_Logout';
import EditUserBlock3 from './EditUserBlock3';

const EditUserInfo = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.mainWrapperEditUser}>
      <div className={styles.block1wrapper}>
        <h1>Личные данные</h1>
      </div>

      <UserInfo_Logout />

      <EditUserBlock3 />
    </div>
  );
};

export default EditUserInfo;
