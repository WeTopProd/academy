import React, { useEffect, useState } from 'react';
import UserInfo_Logout from './UserInfo_Logout';
import styles from '../styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { teachersApi } from '../../../redux/api/teachersApi';
import {
  teachersInit,
  updateTeacher,
} from '../../../redux/slices/teacher/teacherSlice';
import { useRouter } from 'next/router';

const AdminTeacherControl = () => {
  const teachers = useAppSelector((state) => state.teacher.data);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.user.token);

  const router = useRouter();


  const [isChosen, setIsChosen] = useState(0);
  const [chosenInfo, setChosenInfo] = useState({
    full_name: null,
    greetings: null,
    image_url: null,
  });

  const [refresh, setRefresh] = useState(0);
  const [editTeacher, setEditTeacher] = useState(false);

  const [tName, setTName] = useState(chosenInfo.full_name);
  const [tGreetings, setTGreetings] = useState(chosenInfo.greetings);

  const handler = {
    teacherChoose: (id) => {
      setIsChosen(id);
    },
    teacherEditOnClick: () => {
      setEditTeacher(true);
    },
    changeName: (e) => {
      setTName(e.target.value);
    },
    changeGreetings: (e) => {
      setTGreetings(e.target.value);
    },
  };
  useEffect(() => {
    teachers.length == 0 &&
      teachersApi.get().then((data) => {
        dispatch(teachersInit(data));
      });
  }, [teachers, refresh]);
  useEffect(() => {
    var chosenFilter = teachers.filter((el) => el.id == isChosen)[0] || {
      full_name: null,
      greetings: null,
      image_url: null,
    };
    setChosenInfo(chosenFilter);
    setTName(chosenFilter.full_name);
    setTGreetings(chosenFilter.greetings);
  }, [isChosen, refresh]);

  const submitEditedData = () => {
    const data = {
      full_name: tName,
      greetings: tGreetings,
    };
    teachersApi
      .patch(isChosen, data, token)
      .then((data) => dispatch(updateTeacher(data)))
      .then(() => setRefresh((prev) => prev + 1))
      .then(() => setEditTeacher(false))
      .then(()=>window.location.reload())
  };
  return (
    <div className={styles.adminTeacherControlWrapper}>
      <h1>Учителя</h1>
      <UserInfo_Logout />
      <div className={styles.adminTeacherControlMainBlock}>
        {/*  */}
        <div className={styles.AdminTeacherListControl}>
          {teachers.map((el) => {
            return (
              <div onClick={() => handler.teacherChoose(el.id)}>
                <label>{el.name}</label>
              </div>
            );
          })}
        </div>
        {/*  */}
        <div className={styles.AdminTeacherInfo}>
          {isChosen ? (
            <>
              <div className={styles.adminTeacherInfoBlock1}>
                <img src={chosenInfo.image_url} alt="photo" />
                {!editTeacher ? (
                  <label>{chosenInfo.full_name}</label>
                ) : (
                  <input value={tName} onChange={handler.changeName} />
                )}
              </div>
              <div className={styles.adminTeacherInfoBlock2}>
                {!editTeacher ? (
                  <label>{chosenInfo.greetings}</label>
                ) : (
                  <textarea
                    rows={8}
                    cols={66}
                    value={tGreetings}
                    onChange={handler.changeGreetings}
                  />
                )}
              </div>
              <div className={styles.adminEditButton}>
                {!editTeacher ? (
                  <button onClick={handler.teacherEditOnClick}>Edit</button>
                ) : (
                  <button onClick={submitEditedData}>Send</button>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default AdminTeacherControl;
