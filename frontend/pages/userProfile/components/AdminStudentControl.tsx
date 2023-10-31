import React, { useEffect } from 'react';
import UserInfo_Logout from './UserInfo_Logout';
import styles from '../styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { studentsApi } from '../../../redux/api/studentsApi';
import { allUsersInit } from '../../../redux/slices/user/userSlice';

const AdminStudentControl = () => {
  const dispatch = useAppDispatch()
const allUsers = useAppSelector((state)=>state.user.allUsers)
useEffect(()=>{
  allUsers.length == 0 &&
      studentsApi.get().then(data=>{
        console.log(data,'------------');
        
        dispatch(allUsersInit(data))})

    })
  return (
    <div className={styles.adminTeacherControlWrapper}>
      <h1>УЧЕНИКИ</h1>
      <UserInfo_Logout />
      <div className={styles.adminStudentControlMain}>
        <div className={styles.block1ASC}>
          <div className={`${styles.activeASC}`}>записанные</div>
          <div>ожидают ЗАПИСИ</div>
        </div>
        <div className={styles.block2ASC}>block 2</div>
      </div>
    </div>
  );
};

export default AdminStudentControl;
