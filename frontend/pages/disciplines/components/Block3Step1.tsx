import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import {
  chooseDiscipline,
  countLessonsChange,
  countStudentsChange,
  typeLessonChange,
} from '../../../redux/slices/disciplines/disciplineChooseControlSlice';
import styles from '../Disciplines.module.scss';

const Block3Step1 = () => {
  const id = useAppSelector((state) => state.disciplineChooseControl.DSC_id);
  const { type_lessons, count_lessons, count_people } = useAppSelector(
    (state) => state.disciplineChooseControl.chosen
  );

  const disciplines = useAppSelector((state) => state.disciplines);
  const dispatch = useAppDispatch();

  var chosen = disciplines.filter((el) => el.id == id)[0];

  const countClasses = [1, 2, 3, 5, 10, 20, 30];

  const onChange = {
    disciplines: (e) => {
      dispatch(chooseDiscipline(e.target.value));
    },
    type: (e) => {
      dispatch(typeLessonChange(Number(e.target.value)));
    },
    countLessons: (e) => {
      dispatch(countLessonsChange(Number(e.target.value)));
    },
    countStudents: (e) => {
      dispatch(countStudentsChange(Number(e.target.value)));
    },
  };

  return (
    <>
      <div className={styles.Block3Inputs}>
        <span>Дисциплина</span>
        <select name="disciplines" onChange={onChange.disciplines}  className={styles.input}>
          {disciplines.map((el) => {
            if (el.id == id) {
              return (
                <option value={el.id} selected>
                  {el.name}
                </option>
              );
            } else {
              return <option value={el.id}>{el.name}</option>;
            }
          })}
        </select>
      </div>

      {/*  */}

      <div className={styles.Block3Inputs}>
        <span>Вид занятий</span>
        <select value={type_lessons} name="type" onChange={onChange.type}  className={styles.input}>
          {chosen.cost.map((el) => {
            return <option value={el.type}>{el.name}</option>;
          })}
        </select>
      </div>

      {/*  */}

      <div className={styles.Block3Inputs}>
        <span>Количество уроков</span>
        <select
          value={count_lessons}
          name="count"
          onChange={onChange.countLessons}
          className={styles.input}
        >
          {countClasses.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
      </div>

      {/*  */}

      <div className={styles.Block3Inputs}>
        <span>Количество человек</span>
        <input
          value={count_people}
          type="number"
          onChange={onChange.countStudents}
          className={styles.input}
        />
      </div>
    </>
      
  );
};

export default Block3Step1;
