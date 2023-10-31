import React, { useEffect, useState } from 'react';
import styles from '../styles.module.scss';
import UserInfo_Logout from './UserInfo_Logout';
import { Calendar } from 'react-multi-date-picker';
import { teachersApi } from '../../../redux/api/teachersApi';

const TeacherOpenWindow = () => {
  const [date, setDate] = useState('');
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

  const time = [
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',

  ];
  const [timeStartIndex, setTimeStartIndex] = useState(0);
  const [timeEndIndex,setTimeEndIndex]=useState(time.length-1)

  const handler = {
    date: (e) => {
      setDate(`${e.year}-${e.month.number}-${e.day}`);
    },
    startTime: (e) => {
      setTimeStartIndex(time.indexOf(e.target.value));
    },
    endTime:(e)=>{
      setTimeEndIndex(time.indexOf(e.target.value))
    }
  };
  
  const newDate = new Date()
  
  const [dateTimeList, setDateTimeList]=useState([])
  const submit =()=>{
    const token = localStorage.getItem('token')
    const primer = {date:date,staer_time:time[timeStartIndex],end_time:time[timeEndIndex]}
    setDateTimeList(prev=>[...prev, primer])
    teachersApi.openWindow(token, primer)
  }
  useEffect(()=>{
console.log(dateTimeList);

  },[timeStartIndex,timeEndIndex,date,dateTimeList.length])
  return (
    <div className={styles.TeacherClassScheduleWrapper}>
      <h1>График</h1>
      <UserInfo_Logout />

      <div className={styles.ClassSchedule}>
        <div className={styles.ClassScheduleBlock1}>
          <h2>{date}</h2>

          <div>
            {date && (
              <div>
                <label>От</label>{' '}
                <select onChange={handler.startTime}>
                  {time.map((el, i) => (
                    <option>{el}</option>
                  ))}
                </select>{' '}
                <label>До</label>
                <select onChange={handler.endTime}>
                  {time.map((el, i) => {
                    if(i == time.length-1){
                      return <option selected>{el}</option>
                    }
                    else if (i > timeStartIndex) {
                      return <option>{el}</option>;
                    }
                  })}
                </select>
              </div>
            )}
          </div>
          <button onClick={submit}>submit</button>
        </div>
        <div>
          <Calendar
            multiple={false}
              minDate={new Date()}
            sort={true}
            onChange={handler.date}
            className="yellow"
            months={months}
            weekDays={weekdays}
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherOpenWindow;
