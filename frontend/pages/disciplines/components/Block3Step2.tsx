import React, { useEffect, useState } from 'react';
import DatePicker, { Calendar } from 'react-multi-date-picker';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { change_lesson_dates } from '../../../redux/slices/disciplines/disciplineChooseControlSlice';
import styles from '../Disciplines.module.scss';

// import 'react-multi-date-picker/styles/colors/yellow.css';

const Block3Step2 = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState([]);
  const lesson_dates = useAppSelector(
    (state) => state.disciplineChooseControl.chosen.lesson_dates
  );
  const dispatch = useAppDispatch();

  const stepControl = useAppSelector(
    (state) => state.disciplineChooseControl.stepPolControl[2]
  );

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const weekdays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  const openTimeWindow = ['10:00-11:00', '11:00-12:00', '12:00-13:00'];
  const [calendarDisabled, setCalendarDisabled] = useState(false);
  const handler = {
    date: (e) => {
      setTimeout(() => {
        const newArr = [];
        e.map((el) => {
          newArr.length < 5 &&
            newArr.push({
              date: `${el.year}-${el.month.number}-${el.day}`,
              time: time,
            });
        });
        dispatch(change_lesson_dates(newArr));
      }, 0);

      setDate(e);
    },
    time: (e) => {
      setTime(e.target.value);
      const newArr = [];
      lesson_dates.map((el) => {
        newArr.push({ date: el.date, time: e.target.value });
      });
      dispatch(change_lesson_dates(newArr));
      console.log(lesson_dates);
    },
  };
  useEffect(() => {
    lesson_dates.length >= 5
      ? setCalendarDisabled(true)
      : setCalendarDisabled(false);
    console.log(lesson_dates);
  }, [lesson_dates]);

  return (
    <div className={styles.step2Wrapper}>
      <div className={styles.step2Div1}>
        <br />
      {stepControl.general_time ? (
        <label className={styles.POLYACONTROL}>обязательные поля»</label>
      ) : null}
        Time:
        <select className={styles.input} onChange={handler.time}>
          <option disabled selected>
            время занятий
          </option>
          {openTimeWindow.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
        {stepControl.start_lessons ? (
        <label className={styles.POLYACONTROL}>обязательные поля»</label>
      ) : null}
        Старт занятий:
        <input
          placeholder="Старт занятий"
          value={lesson_dates[0]?.date}
          className={styles.input}
        />
      </div>
      <div className={styles.step2Div1}>
        <Calendar
          multiple={true}
          minDate={new Date()}
          sort={true}
          disabled={calendarDisabled}
          onChange={handler.date}
          className="yellow"
          months={months}
          weekDays={weekdays}
        />
      </div>
    </div>
  );
};

export default Block3Step2;
