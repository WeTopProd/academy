import React, { useEffect, useState } from 'react';
import MainUserProfile from './components/MainUserProfile';
import { useAppSelector } from '../../redux/store';
import EditUserInfo from './components/EditUserInfo';
import Router from 'next/router';

const userProfile = () => {
  const { user, userProfilePageStatus } = useAppSelector((state) => state.user);
  useEffect(() => {
    localStorage.getItem('token')?.length < 5 && Router.push('/');
  }, []);
  return (
    // personalInfo myCourses history certeficate
    <>
      {userProfilePageStatus == 'MainUserProfile' && <MainUserProfile />}
      {userProfilePageStatus == 'personalInfo' && <EditUserInfo />}
    </>
  );
};

export default userProfile;
