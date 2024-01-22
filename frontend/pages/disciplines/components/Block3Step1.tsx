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

  const disciplines = useAppSelector((state) => state.disciplines.data);
  const dispatch = useAppDispatch();

  const stepControl = useAppSelector(
    (state) => state.disciplineChooseControl.stepPolControl[1]
  );

  var chosen = disciplines.filter((el) => el.id == id)[0];

  // const maxClassCount = chosen.cost[chosen.cost.length - 1].name.replace(
  //   /\D/g,
  //   ''
  // );
  function countClassesF(max) {
    var num = Number(max);
    let result = [];
    while (num > 1) {
      result.push(num);

      if (num % 10 === 0 && num != 10) {
        num -= 10;
      } else if (num == 10) {
        num -= 5;
      } else {
        num -= 1;
      }
    }

    result.push(num);
    return result.reverse();
  }
  // const countClasses = countClassesF(maxClassCount);

  // useEffect(() => {
  //   countClassesF(maxClassCount);
  //   console.log(countClasses);
  // }, [maxClassCount]);

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
      {stepControl.discipline ? (
        <label className={styles.POLYACONTROL}>обязательные поля»</label>
      ) : null}
      <div className={styles.Block3Inputs}>
        <span>Дисциплина</span>
        <select
          name="disciplines"
          onChange={onChange.disciplines}
          className={styles.input}
        >
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
      {stepControl.type_lessons ? (
        <label className={styles.POLYACONTROL}>обязательные поля»</label>
      ) : null}

      <div className={styles.Block3Inputs}>
        <span>Вид занятий</span>
        <select
          value={type_lessons}
          name="type"
          onChange={onChange.type}
          className={styles.input}
        >
          <option selected disabled>
            Choose
          </option>
          {/*{chosen.cost.map((el) => {*/}
          {/*  return <option value={el.type}>{el.name}</option>;*/}
          {/*})}*/}
        </select>
      </div>

      {/*  */}
      {stepControl.count_lessons ? (
        <label className={styles.POLYACONTROL}>обязательные поля»</label>
      ) : null}

      <div className={styles.Block3Inputs}>
        <span>Количество уроков</span>
        <select
          value={count_lessons}
          name="count"
          onChange={onChange.countLessons}
          className={styles.input}
        >
          {/*{countClasses.map((el) => (*/}
          {/*  <option value={el}>{el}</option>*/}
          {/*))}*/}
        </select>
      </div>

      {/*  */}
      {stepControl.count_people ? (
        <label className={styles.POLYACONTROL}>обязательные поля»</label>
      ) : null}

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
