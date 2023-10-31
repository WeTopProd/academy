import React, { useEffect, useState } from 'react';
import MainUserProfile from './components/MainUserProfile';
import { useAppSelector } from '../../redux/store';
import EditUserInfo from './components/EditUserInfo';
import Router from 'next/router';
import TeacherClassSchedule from './components/TeacherClassSchedule';
import TeacherOpenWindow from './components/TeacherOpenWindow';
import AdminTeacherControl from './components/AdminTeacherControl';
import AdminStudentControl from './components/AdminStudentControl';

const userProfile = () => {
  const { user, userProfilePageStatus } = useAppSelector((state) => state.user);
  useEffect(() => {
    localStorage?.getItem('token')?.length < 5 && Router.push('/');
  }, []);
  return (
    // personalInfo myCourses history certeficate
    <>
      {/* Global */}
      {userProfilePageStatus == 'MainUserProfile' && <MainUserProfile />}

      {/* Student */}
      {userProfilePageStatus == 'personalInfo' && <EditUserInfo />}
      {userProfilePageStatus == 'myCourses' && null}
      {userProfilePageStatus == 'history' && null}
      {userProfilePageStatus == 'certeficate' && null}

      {/* Teacher */}
      {userProfilePageStatus == 'classSchedule' && <TeacherClassSchedule />}
      {userProfilePageStatus == 'openWindow' && <TeacherOpenWindow />}

      {/* Admin */}
      {userProfilePageStatus == 'adminTeacherControl' && <AdminTeacherControl />}
      {userProfilePageStatus == 'adminStudentControl' && <AdminStudentControl />}

    </>
  );
};

export default userProfile;
